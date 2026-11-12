import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function AstralShell({ starCount = 380, radius = 14, speed = 0.8 }) {
  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      55,
      container.clientWidth / container.clientHeight,
      0.1,
      1000
    );
    camera.position.set(0, 0, 30);

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true, powerPreference: 'high-performance' });
    renderer.setSize(container.clientWidth, container.clientHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    const group = new THREE.Group();
    scene.add(group);

    // --- 1. Fibonacci Sphere Stars ---
    const starPositions = new Float32Array(starCount * 3);
    const starColors = new Float32Array(starCount * 3);
    const starCoords = [];

    const phi = Math.PI * (3 - Math.sqrt(5)); // Golden angle

    for (let i = 0; i < starCount; i++) {
      const y = 1 - (i / (starCount - 1)) * 2; // y goes from 1 to -1
      const radiusAtY = Math.sqrt(1 - y * y);
      const theta = phi * i;

      const r = radius * (0.95 + Math.random() * 0.1);
      const x = Math.cos(theta) * radiusAtY * r;
      const py = y * r;
      const z = Math.sin(theta) * radiusAtY * r;

      starPositions[i * 3] = x;
      starPositions[i * 3 + 1] = py;
      starPositions[i * 3 + 2] = z;

      starCoords.push(new THREE.Vector3(x, py, z));

      // Star color variation (Ice cyan, cobalt, pure white, soft lavender)
      const colorMix = Math.random();
      if (colorMix > 0.7) {
        starColors[i * 3] = 0.95; starColors[i * 3 + 1] = 0.98; starColors[i * 3 + 2] = 1.0; // White
      } else if (colorMix > 0.3) {
        starColors[i * 3] = 0.38; starColors[i * 3 + 1] = 0.65; starColors[i * 3 + 2] = 0.98; // Ice Blue
      } else {
        starColors[i * 3] = 0.22; starColors[i * 3 + 1] = 0.48; starColors[i * 3 + 2] = 0.95; // Cobalt
      }
    }

    const starGeometry = new THREE.BufferGeometry();
    starGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    starGeometry.setAttribute('color', new THREE.BufferAttribute(starColors, 3));

    // Star texture generator
    const createStarTexture = () => {
      const c = document.createElement('canvas');
      c.width = 64;
      c.height = 64;
      const ctx = c.getContext('2d');
      const grad = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
      grad.addColorStop(0, 'rgba(255, 255, 255, 1)');
      grad.addColorStop(0.2, 'rgba(147, 197, 253, 0.9)');
      grad.addColorStop(0.5, 'rgba(59, 130, 246, 0.35)');
      grad.addColorStop(1, 'rgba(0, 0, 0, 0)');
      ctx.fillStyle = grad;
      ctx.beginPath();
      ctx.arc(32, 32, 32, 0, Math.PI * 2);
      ctx.fill();
      return new THREE.CanvasTexture(c);
    };

    const starMaterial = new THREE.PointsMaterial({
      size: 2.2,
      vertexColors: true,
      map: createStarTexture(),
      transparent: true,
      opacity: 0.85,
      blending: THREE.AdditiveBlending,
      depthWrite: false
    });

    const starField = new THREE.Points(starGeometry, starMaterial);
    group.add(starField);

    // --- 2. Interconnecting Constellation Lines ---
    const lineIndices = [];
    const maxDistance = 4.2;

    for (let i = 0; i < starCoords.length; i++) {
      for (let j = i + 1; j < starCoords.length; j++) {
        const d = starCoords[i].distanceTo(starCoords[j]);
        if (d < maxDistance) {
          lineIndices.push(i, j);
        }
      }
    }

    const lineGeometry = new THREE.BufferGeometry();
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(starPositions, 3));
    lineGeometry.setIndex(lineIndices);

    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x60A5FA,
      transparent: true,
      opacity: 0.22,
      blending: THREE.AdditiveBlending
    });

    const constellationLines = new THREE.LineSegments(lineGeometry, lineMaterial);
    group.add(constellationLines);

    // --- 3. Subtle Latitude Rings ---
    const rings = [0, 6, -6];
    rings.forEach((ringY) => {
      const ringR = Math.sqrt(Math.max(0, radius * radius - ringY * ringY));
      const ringGeom = new THREE.BufferGeometry();
      const points = [];
      const segments = 64;
      for (let s = 0; s <= segments; s++) {
        const theta = (s / segments) * Math.PI * 2;
        points.push(new THREE.Vector3(Math.cos(theta) * ringR, ringY, Math.sin(theta) * ringR));
      }
      ringGeom.setFromPoints(points);
      const ringMat = new THREE.LineBasicMaterial({
        color: 0x38BDF8,
        transparent: true,
        opacity: 0.12,
        blending: THREE.AdditiveBlending
      });
      const ringMesh = new THREE.Line(ringGeom, ringMat);
      group.add(ringMesh);
    });

    // --- Interaction & Motion Physics ---
    let targetRotX = 0;
    let targetRotY = 0;
    let currentRotX = 0;
    let currentRotY = 0;

    const onPointerMove = (e) => {
      const normX = (e.clientX / window.innerWidth) * 2 - 1;
      const normY = -(e.clientY / window.innerHeight) * 2 + 1;
      targetRotY = normX * 0.45;
      targetRotX = -normY * 0.35;
    };

    window.addEventListener('pointermove', onPointerMove, { passive: true });

    const onResize = () => {
      if (!container) return;
      camera.aspect = container.clientWidth / container.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(container.clientWidth, container.clientHeight);
    };
    window.addEventListener('resize', onResize);

    // --- Loop ---
    let frameId;
    let clock = new THREE.Clock();

    const animate = () => {
      frameId = requestAnimationFrame(animate);
      const dt = clock.getDelta();

      // Continuous slow celestial revolution
      group.rotation.y += 0.08 * dt * speed;
      group.rotation.x += 0.03 * dt * speed;

      // Mouse interactive tilt with lerp
      currentRotX += (targetRotX - currentRotX) * 0.04;
      currentRotY += (targetRotY - currentRotY) * 0.04;

      group.position.x = currentRotY * 4;
      group.position.y = currentRotX * 3;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('resize', onResize);
      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
      starGeometry.dispose();
      starMaterial.dispose();
      lineGeometry.dispose();
      lineMaterial.dispose();
      renderer.dispose();
    };
  }, [starCount, radius, speed]);

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

