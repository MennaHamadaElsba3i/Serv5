import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function SpectralDrape({ opacity = 0.85, speed = 1.0, dotSize = 2.4 }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // --- Scene & Camera ---
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      60,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, -18, 22);
    camera.lookAt(0, 4, 0);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // --- Mesh Grid Dimensions ---
    const cols = 64;
    const rows = 64;
    const numPoints = cols * rows;
    const spacingX = 0.9;
    const spacingY = 0.9;

    const positions = new Float32Array(numPoints * 3);
    const colors = new Float32Array(numPoints * 3);

    // Initial grid coordinates centered at origin
    let pIdx = 0;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const x = (c - cols / 2) * spacingX;
        const y = (r - rows / 2) * spacingY;
        const z = 0;

        positions[pIdx * 3] = x;
        positions[pIdx * 3 + 1] = y;
        positions[pIdx * 3 + 2] = z;

        // Gradient coloring: Deep Cobalt -> Ice Cyan -> Subtle Lavender
        const distFromCenter = Math.sqrt(x * x + y * y) / (cols * 0.5 * spacingX);
        const rVal = 0.15 + 0.18 * Math.sin(x * 0.1 + distFromCenter * 2);
        const gVal = 0.38 + 0.35 * Math.cos(y * 0.1 + distFromCenter);
        const bVal = 0.88 + 0.12 * Math.sin(distFromCenter * 3);

        colors[pIdx * 3] = rVal;
        colors[pIdx * 3 + 1] = gVal;
        colors[pIdx * 3 + 2] = bVal;

        pIdx++;
      }
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    // Circular glowing dot texture generated on canvas
    const createDotTexture = () => {
      const c = document.createElement('canvas');
      c.width = 64;
      c.height = 64;
      const ctx = c.getContext('2d');
      const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      grad.addColorStop(0, 'rgba(255,255,255,1)');
      grad.addColorStop(0.35, 'rgba(96,165,250,0.9)');
      grad.addColorStop(0.7, 'rgba(59,130,246,0.3)');
      grad.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(32, 32, 32, 0, Math.PI * 2);
      ctx.fill();
      const texture = new THREE.CanvasTexture(c);
      return texture;
    };

    const material = new THREE.PointsMaterial({
      size: dotSize,
      vertexColors: true,
      map: createDotTexture(),
      transparent: true,
      opacity: opacity,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const pointCloud = new THREE.Points(geometry, material);
    scene.add(pointCloud);

    // --- Interactive Mouse & Scroll Velocity ---
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;
    let scrollVelocity = 0;
    let lastScrollY = window.pageYOffset;

    const onPointerMove = (e) => {
      const normX = (e.clientX / window.innerWidth) * 2 - 1;
      const normY = -(e.clientY / window.innerHeight) * 2 + 1;
      targetMouseX = normX * 8;
      targetMouseY = normY * 6;
    };

    const onScroll = () => {
      const currentScroll = window.pageYOffset;
      const delta = currentScroll - lastScrollY;
      lastScrollY = currentScroll;
      scrollVelocity += delta * 0.05;
    };

    window.addEventListener('pointermove', onPointerMove, { passive: true });
    window.addEventListener('scroll', onScroll, { passive: true });

    // --- Resize Handler ---
    const onResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', onResize);

    // --- Animation Loop ---
    let animationFrameId;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime() * speed;

      // Smooth mouse lerping
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      // Damped scroll velocity
      scrollVelocity *= 0.92;

      // Update 3D Drape Waves
      const posAttr = geometry.attributes.position;
      const posArray = posAttr.array;

      let idx = 0;
      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const x = posArray[idx * 3];
          const y = posArray[idx * 3 + 1];

          // Complex silk fold equations (harmonic sine waves + drape drape folds)
          const fold1 = Math.sin(x * 0.18 + elapsedTime * 1.2) * 2.8;
          const fold2 = Math.cos(y * 0.22 - elapsedTime * 0.9) * 2.4;
          const fold3 = Math.sin((x + y) * 0.12 + elapsedTime * 1.5) * 1.8;
          
          // Mouse interaction ripple
          const dx = x - mouseX;
          const dy = y - mouseY;
          const distSq = dx * dx + dy * dy;
          const mouseDip = Math.exp(-distSq * 0.03) * 4.2;

          // Scroll kinetic flex
          const scrollFlex = Math.sin(y * 0.1) * (scrollVelocity * 0.4);

          // Calculate final Z coordinate
          posArray[idx * 3 + 2] = fold1 + fold2 + fold3 - mouseDip + scrollFlex;

          idx++;
        }
      }
      posAttr.needsUpdate = true;

      // Gentle camera sway
      camera.position.x = mouseX * 0.3;
      camera.position.y = -18 + mouseY * 0.2 + (scrollVelocity * 0.15);
      camera.lookAt(0, 4, 0);

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    };
  }, [opacity, speed, dotSize]);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden'
      }}
      aria-hidden="true"
    />
  );
}

