import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function ThroughTheLens3D({ scrollProgress = 0 }) {
  const containerRef = useRef(null);
  const progressRef = useRef(scrollProgress);
  progressRef.current = scrollProgress;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // --- Scene Setup ---
    const scene = new THREE.Scene();

    const width = container.clientWidth || 560;
    const height = container.clientHeight || 520;

    const camera = new THREE.PerspectiveCamera(38, width / height, 0.1, 100);
    camera.position.set(0, 0, 9.8);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.2;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // =========================================================================
    // LIGHTING: COOL OPTICAL STUDIO LIGHTING (Navy, Soft Ice Blue & Silver)
    // Strictly NO gold, bronze, copper, orange, or yellow.
    // =========================================================================
    // Deep midnight ambient
    const ambientLight = new THREE.AmbientLight(0x0a1226, 2.5);
    scene.add(ambientLight);

    // Soft Ice Blue Key Light (Creates crisp glint on curved glass faces)
    const keyLight = new THREE.DirectionalLight(0xbfdbfe, 3.8);
    keyLight.position.set(6, 7, 7);
    scene.add(keyLight);

    // Electric Blue Optical Sweep Light (Moves across lens as user scrolls)
    const sweepLight = new THREE.PointLight(0x38bdf8, 3.2, 14);
    sweepLight.position.set(-3, 2, 4);
    scene.add(sweepLight);

    // Specular Rim Light (Silver edge highlights)
    const rimLight = new THREE.DirectionalLight(0xf1f5f9, 2.8);
    rimLight.position.set(-6, -6, -4);
    scene.add(rimLight);

    // =========================================================================
    // MATERIALS: OPTICAL GLASS, BRUSHED SILVER, COOL PLATINUM
    // =========================================================================
    // 1. High-Precision Optical Glass Material
    const opticalGlassMat = new THREE.MeshPhysicalMaterial({
      color: 0xe0f2fe,
      transmission: 0.94,
      opacity: 1.0,
      transparent: true,
      roughness: 0.03,
      ior: 1.52,
      thickness: 1.6,
      specularIntensity: 1.0,
      specularColor: 0xffffff,
      clearcoat: 1.0,
      clearcoatRoughness: 0.04,
      attenuationColor: 0x60a5fa,
      attenuationDistance: 2.4
    });

    // 2. Brushed Silver Outer Architectural Mounting Ring
    const brushedSilverMat = new THREE.MeshStandardMaterial({
      color: 0xd8e2ec,
      metalness: 0.94,
      roughness: 0.22
    });

    // 3. Cool Platinum Floating Aperture Fin
    const platinumMat = new THREE.MeshStandardMaterial({
      color: 0x94a3b8,
      metalness: 0.9,
      roughness: 0.28
    });

    // =========================================================================
    // MASTER OPTICAL LENS GROUP
    // =========================================================================
    const lensMasterGroup = new THREE.Group();
    scene.add(lensMasterGroup);

    // --- A. Biconvex Optical Glass Lens Element ---
    // Scaled sphere creates a thick, double-curved optical magnifying meniscus
    const lensGeo = new THREE.SphereGeometry(3.1, 64, 64);
    lensGeo.scale(1.0, 1.0, 0.28);
    const lensMesh = new THREE.Mesh(lensGeo, opticalGlassMat);
    lensMasterGroup.add(lensMesh);

    // --- B. Sculptural Silver Outer Bezel Ring ---
    const bezelGeo = new THREE.TorusGeometry(3.22, 0.1, 32, 120);
    const bezelMesh = new THREE.Mesh(bezelGeo, brushedSilverMat);
    lensMasterGroup.add(bezelMesh);

    // --- C. Concentric Precision Floating Ring (Internal Optical Horizon) ---
    const innerRingGeo = new THREE.TorusGeometry(2.2, 0.035, 16, 100);
    const innerRingMesh = new THREE.Mesh(innerRingGeo, platinumMat);
    innerRingMesh.rotation.x = Math.PI / 6;
    lensMasterGroup.add(innerRingMesh);

    // --- D. Sculptural Optical Alignment Fin (Subtle surreal bracket) ---
    const finGeo = new THREE.TorusGeometry(3.45, 0.05, 16, 80, Math.PI * 0.7);
    const finMesh = new THREE.Mesh(finGeo, brushedSilverMat);
    finMesh.rotation.z = Math.PI / 4;
    lensMasterGroup.add(finMesh);

    // =========================================================================
    // MINIATURE DIGITAL SOLUTION FACETS (Refracted inside/near the lens)
    // 4 micro-screens: Web Interface, Mobile App, Analytics Dashboard, E-Commerce
    // =========================================================================
    const createMicroCanvas = (type) => {
      const c = document.createElement('canvas');
      c.width = 256;
      c.height = 160;
      const ctx = c.getContext('2d');

      // Midnight Navy Card Background
      ctx.fillStyle = 'rgba(8, 14, 28, 0.92)';
      ctx.fillRect(0, 0, 256, 160);

      // Cyan / Ice-Blue Accent Border
      ctx.strokeStyle = 'rgba(96, 165, 250, 0.6)';
      ctx.lineWidth = 3;
      ctx.strokeRect(4, 4, 248, 152);

      // Top Header Bar
      ctx.fillStyle = 'rgba(30, 58, 138, 0.7)';
      ctx.fillRect(4, 4, 248, 26);

      // Dot Indicators
      ctx.fillStyle = '#60a5fa';
      ctx.beginPath();
      ctx.arc(20, 17, 4, 0, Math.PI * 2);
      ctx.fill();

      ctx.fillStyle = '#93c5fd';
      ctx.beginPath();
      ctx.arc(36, 17, 3, 0, Math.PI * 2);
      ctx.fill();

      // Content specific wireframes
      if (type === 'web') {
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 12px sans-serif';
        ctx.fillText('WEB ARCHITECTURE', 54, 21);

        // Grid cards
        ctx.fillStyle = 'rgba(56, 189, 248, 0.2)';
        ctx.fillRect(20, 44, 100, 45);
        ctx.fillRect(135, 44, 100, 45);

        // Latency metric
        ctx.fillStyle = '#38bdf8';
        ctx.font = '10px monospace';
        ctx.fillText('LATENCY: 42ms • CWV 100', 20, 115);

        // Progress bar
        ctx.fillStyle = '#2563eb';
        ctx.fillRect(20, 128, 180, 6);
      } else if (type === 'mobile') {
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 12px sans-serif';
        ctx.fillText('MOBILE PLATFORM', 54, 21);

        // Mobile preview frame
        ctx.strokeStyle = '#38bdf8';
        ctx.strokeRect(30, 40, 50, 95);

        ctx.fillStyle = 'rgba(147, 197, 253, 0.3)';
        ctx.fillRect(95, 46, 135, 18);
        ctx.fillRect(95, 74, 110, 14);
        ctx.fillRect(95, 98, 125, 14);

        ctx.fillStyle = '#60a5fa';
        ctx.font = '10px monospace';
        ctx.fillText('iOS & Android Native Mesh', 95, 130);
      } else if (type === 'dashboard') {
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 12px sans-serif';
        ctx.fillText('ENTERPRISE METRICS', 54, 21);

        // Sparkline graph
        ctx.strokeStyle = '#38bdf8';
        ctx.lineWidth = 2.5;
        ctx.beginPath();
        ctx.moveTo(20, 110);
        ctx.lineTo(60, 80);
        ctx.lineTo(110, 95);
        ctx.lineTo(160, 55);
        ctx.lineTo(210, 65);
        ctx.lineTo(235, 45);
        ctx.stroke();

        ctx.fillStyle = '#93c5fd';
        ctx.font = '10px monospace';
        ctx.fillText('SLA: 99.98% • ZATCA P2', 20, 135);
      } else if (type === 'ecommerce') {
        ctx.fillStyle = '#ffffff';
        ctx.font = 'bold 12px sans-serif';
        ctx.fillText('CLOUD COMMERCE', 54, 21);

        // Checkout pipeline nodes
        ctx.fillStyle = '#2563eb';
        ctx.beginPath();
        ctx.arc(45, 75, 14, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.arc(128, 75, 14, 0, Math.PI * 2);
        ctx.fill();

        ctx.beginPath();
        ctx.arc(210, 75, 14, 0, Math.PI * 2);
        ctx.fill();

        ctx.strokeStyle = '#60a5fa';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(60, 75);
        ctx.lineTo(114, 75);
        ctx.moveTo(142, 75);
        ctx.lineTo(196, 75);
        ctx.stroke();

        ctx.fillStyle = '#38bdf8';
        ctx.font = '10px monospace';
        ctx.fillText('Multi-Region Checkout Core', 45, 130);
      }

      const texture = new THREE.CanvasTexture(c);
      texture.needsUpdate = true;
      return texture;
    };

    // Micro Facet Planes placed in the focal zone of the lens
    const facetConfigs = [
      { type: 'web', pos: [-0.95, 0.7, -0.2], rotY: 0.15 },
      { type: 'mobile', pos: [1.0, 0.55, 0.15], rotY: -0.2 },
      { type: 'dashboard', pos: [-0.85, -0.75, 0.1], rotY: 0.18 },
      { type: 'ecommerce', pos: [0.9, -0.65, -0.15], rotY: -0.15 }
    ];

    const facetGroup = new THREE.Group();
    lensMasterGroup.add(facetGroup);

    const facetMeshes = facetConfigs.map((cfg) => {
      const texture = createMicroCanvas(cfg.type);
      const mat = new THREE.MeshBasicMaterial({
        map: texture,
        transparent: true,
        opacity: 0.65,
        blending: THREE.AdditiveBlending,
        depthWrite: false
      });
      const geo = new THREE.PlaneGeometry(1.4, 0.88);
      const mesh = new THREE.Mesh(geo, mat);
      mesh.position.set(cfg.pos[0], cfg.pos[1], cfg.pos[2]);
      mesh.rotation.y = cfg.rotY;
      facetGroup.add(mesh);
      return { mesh, texture, mat, basePos: cfg.pos };
    });

    // =========================================================================
    // INTERACTIVE MOUSE PARALLAX & SCROLL INTERACTION
    // =========================================================================
    let mouseX = 0;
    let mouseY = 0;
    let targetMouseX = 0;
    let targetMouseY = 0;

    const onMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      if (rect.top <= window.innerHeight && rect.bottom >= 0) {
        targetMouseX = ((e.clientX - rect.left) / width - 0.5) * 2;
        targetMouseY = ((e.clientY - rect.top) / height - 0.5) * 2;
      }
    };
    window.addEventListener('mousemove', onMouseMove, { passive: true });

    const onResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth || 560;
      const newHeight = container.clientHeight || 520;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };
    window.addEventListener('resize', onResize);

    // =========================================================================
    // ANIMATION LOOP: SCROLL-DRIVEN OPTICAL TRANSFORMATION
    // =========================================================================
    let clock = new THREE.Clock();
    let animFrameId;

    const render = () => {
      animFrameId = requestAnimationFrame(render);
      const elapsed = clock.getElapsedTime();

      // Clamped Scroll Progress
      const p = Math.max(0, Math.min(1, progressRef.current));

      // Mouse Lerp
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      // Micro idle breathing (respects reduced motion)
      const idleAngle = prefersReducedMotion ? 0 : Math.sin(elapsed * 0.6) * 0.03;

      // STAGE 1 & 2: Controlled Rotation and Shift of the Lens
      lensMasterGroup.rotation.y = mouseX * 0.18 + (p - 0.5) * 0.45 + idleAngle;
      lensMasterGroup.rotation.x = -mouseY * 0.14 + (p - 0.5) * 0.25;
      lensMasterGroup.rotation.z = Math.sin(elapsed * 0.4) * 0.02;

      // Subtle positional shift as user scrolls
      lensMasterGroup.position.x = (p - 0.5) * 0.35;
      lensMasterGroup.position.y = (0.5 - p) * 0.4;

      // STAGE 2: Blue Optical Light Sweep travels across the lens
      sweepLight.position.x = -4 + p * 8;
      sweepLight.position.y = 2 - p * 3;
      sweepLight.intensity = 2.4 + Math.sin(p * Math.PI) * 1.8;

      // Subtle Refraction Movement of Micro Digital Facets
      facetMeshes.forEach((item, idx) => {
        // Micro facets illuminate and sharpen as light sweeps across
        const distFromLight = Math.abs(item.mesh.position.x - sweepLight.position.x * 0.3);
        const facetGlow = Math.max(0.4, 0.95 - distFromLight * 0.25);
        item.mat.opacity = facetGlow * (p > 0.1 ? 0.85 : p * 8.5);

        // Micro parallax depth
        item.mesh.position.z = item.basePos[2] + Math.sin(elapsed * 0.7 + idx) * 0.03;
      });

      // Internal concentric ring gentle rotation
      innerRingMesh.rotation.z = elapsed * 0.04;
      finMesh.rotation.z = Math.PI / 4 + elapsed * 0.02;

      // STAGE 4: Soft Exit Transition as user scrolls toward bottom
      if (p > 0.82) {
        const exitFactor = 1 - (p - 0.82) / 0.18;
        lensMasterGroup.scale.setScalar(0.92 + exitFactor * 0.08);
      } else {
        lensMasterGroup.scale.setScalar(1.0);
      }

      renderer.render(scene, camera);
    };

    render();

    // =========================================================================
    // CLEANUP
    // =========================================================================
    return () => {
      cancelAnimationFrame(animFrameId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      lensGeo.dispose();
      bezelGeo.dispose();
      innerRingGeo.dispose();
      finGeo.dispose();
      opticalGlassMat.dispose();
      brushedSilverMat.dispose();
      platinumMat.dispose();
      facetMeshes.forEach(({ texture, mat, mesh }) => {
        texture.dispose();
        mat.dispose();
        mesh.geometry.dispose();
      });
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="through-the-lens-viewport"
      style={{
        width: '100%',
        height: '520px',
        position: 'relative'
      }}
    />
  );
}

