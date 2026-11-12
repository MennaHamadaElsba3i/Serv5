import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default function AboutEvolutionSculpture3D({ scrollProgress = 0 }) {
  const containerRef = useRef(null);
  const progressRef = useRef(scrollProgress);
  progressRef.current = scrollProgress;

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    // Check prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // --- Scene Setup ---
    const scene = new THREE.Scene();

    const width = container.clientWidth || 560;
    const height = container.clientHeight || 500;

    const camera = new THREE.PerspectiveCamera(40, width / height, 0.1, 100);
    camera.position.set(0, 0, 10.5);

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance'
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1.15;
    renderer.shadowMap.enabled = true;
    renderer.shadowMap.type = THREE.PCFSoftShadowMap;
    container.appendChild(renderer.domElement);

    // =========================================================================
    // LIGHTING: COOL-TONED MUSEUM STUDIO LIGHTING (Navy, Ice Blue, Silver)
    // Zero gold, zero bronze, zero warm light.
    // =========================================================================
    // Deep midnight ambient
    const ambientLight = new THREE.AmbientLight(0x0a1128, 2.4);
    scene.add(ambientLight);

    // Key Light: Soft Ice Blue (Crisp highlight on silver metallic surfaces)
    const keyLight = new THREE.DirectionalLight(0xbfdbfe, 3.6);
    keyLight.position.set(7, 9, 8);
    keyLight.castShadow = true;
    scene.add(keyLight);

    // Fill Light: Deep Electric Navy (Adds profound volumetric shadow depth)
    const fillLight = new THREE.DirectionalLight(0x1d4ed8, 2.8);
    fillLight.position.set(-8, -5, 4);
    scene.add(fillLight);

    // Specular Rim Light: Pure Cool Silver
    const rimLight = new THREE.DirectionalLight(0xf1f5f9, 3.2);
    rimLight.position.set(0, -6, -5);
    scene.add(rimLight);

    // Subtle Internal Glow: Electric Cyan-Blue Point Light
    const coreGlow = new THREE.PointLight(0x38bdf8, 2.2, 18);
    coreGlow.position.set(0, 0, 1.5);
    scene.add(coreGlow);

    // =========================================================================
    // MATERIALS: BRUSHED SILVER, COOL PLATINUM, POLISHED ICE CHROME, TITANIUM
    // =========================================================================
    const brushedSilverMat = new THREE.MeshStandardMaterial({
      color: 0xd8e2ec,
      metalness: 0.94,
      roughness: 0.22,
      envMapIntensity: 1.3
    });

    const coolPlatinumMat = new THREE.MeshStandardMaterial({
      color: 0x94a3b8,
      metalness: 0.88,
      roughness: 0.32
    });

    const iceChromeMat = new THREE.MeshStandardMaterial({
      color: 0xe0f2fe,
      metalness: 0.96,
      roughness: 0.12
    });

    const deepTitaniumMat = new THREE.MeshStandardMaterial({
      color: 0x334155,
      metalness: 0.82,
      roughness: 0.42
    });

    // =========================================================================
    // SCULPTURAL MASTER GROUP: THE EVOLUTION OF EXPERIENCE
    // Interconnected, layered, curved architectural forms that assemble with scroll
    // =========================================================================
    const masterSculpture = new THREE.Group();
    scene.add(masterSculpture);

    // --- LAYER 1: The Core Monumental Ribbon (Continuous Helical Form) ---
    // Symbolizes continuous development and the core of 14+ years engineering
    const coreGeo = new THREE.TorusKnotGeometry(1.6, 0.42, 128, 32, 2, 3);
    const coreMesh = new THREE.Mesh(coreGeo, brushedSilverMat);
    coreMesh.castShadow = true;
    coreMesh.receiveShadow = true;
    masterSculpture.add(coreMesh);

    // --- LAYER 2: Outer Sweeping Architectural Arc (Brushed Ice Chrome) ---
    // Symbolizes building connected digital solutions
    const arcGeo = new THREE.TorusGeometry(2.7, 0.18, 24, 120, Math.PI * 1.5);
    const arcMesh = new THREE.Mesh(arcGeo, iceChromeMat);
    arcMesh.castShadow = true;
    masterSculpture.add(arcMesh);

    // --- LAYER 3: Interlocking Horizon Ring (Cool Platinum) ---
    // Symbolizes global standards and scalable enterprise horizons
    const ringGeo = new THREE.TorusGeometry(3.3, 0.09, 20, 120);
    const ringMesh = new THREE.Mesh(ringGeo, coolPlatinumMat);
    masterSculpture.add(ringMesh);

    // --- LAYER 4: Dynamic Architectural Crest Fin (Deep Titanium Silver) ---
    // Symbolizes innovation, precision, and turning ideas into measurable impact
    const finGeo = new THREE.TorusGeometry(2.15, 0.22, 20, 80, Math.PI * 0.95);
    const finMesh = new THREE.Mesh(finGeo, deepTitaniumMat);
    masterSculpture.add(finMesh);

    // --- LAYER 5: Balanced Precision Specular Pearl (Ice Alabaster Core) ---
    const pearlGeo = new THREE.SphereGeometry(0.5, 36, 36);
    const pearlMat = new THREE.MeshStandardMaterial({
      color: 0xf8fafc,
      metalness: 0.2,
      roughness: 0.15
    });
    const pearlMesh = new THREE.Mesh(pearlGeo, pearlMat);
    masterSculpture.add(pearlMesh);

    // =========================================================================
    // LAYER TRANSFORMATION MATRICES (Exploded Initial -> Assembled Final)
    // =========================================================================
    // Initial Exploded State (scroll = 0): Layers separated, shifted along spatial axes
    const initialConfig = {
      core: { pos: [0, 0.3, 0.4], rot: [0.35, -0.4, 0.2] },
      arc: { pos: [1.6, 1.2, 0.9], rot: [0.8, -0.5, 0.6] },
      ring: { pos: [-1.4, -1.0, -0.8], rot: [-0.6, 0.7, -0.4] },
      fin: { pos: [1.3, -1.4, 1.1], rot: [0.9, 0.3, -0.6] },
      pearl: { pos: [-2.1, 1.8, 1.5], rot: [0, 0, 0] }
    };

    // Final Assembled State (scroll = 1): Interlocked, unified monumental sculpture
    const finalConfig = {
      core: { pos: [0, 0, 0], rot: [0, 0, 0] },
      arc: { pos: [0, 0, 0], rot: [Math.PI / 3.8, Math.PI / 5.2, 0] },
      ring: { pos: [0, 0, 0], rot: [Math.PI / 2.8, -Math.PI / 4.5, Math.PI / 7] },
      fin: { pos: [0, 0, 0], rot: [-Math.PI / 5, Math.PI / 3.5, 0] },
      pearl: { pos: [-1.8, -1.4, 0.9], rot: [0, 0, 0] }
    };

    // Helper: Linear Interpolation with cubic ease-out
    const lerp = (a, b, t) => a + (b - a) * t;
    const easeOutCubic = (x) => 1 - Math.pow(1 - x, 3);

    // Subtle interactive mouse parallax
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

    // Handle Window Resize
    const onResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth || 560;
      const newHeight = container.clientHeight || 500;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };
    window.addEventListener('resize', onResize);

    // =========================================================================
    // RENDER / ANIMATION LOOP
    // =========================================================================
    let clock = new THREE.Clock();
    let animationFrameId;

    const renderLoop = () => {
      animationFrameId = requestAnimationFrame(renderLoop);
      const elapsed = clock.getElapsedTime();

      // Current scroll factor (clamped between 0 and 1)
      const rawProgress = Math.max(0, Math.min(1, progressRef.current));
      const t = easeOutCubic(rawProgress);

      // Smooth mouse interpolation
      mouseX += (targetMouseX - mouseX) * 0.05;
      mouseY += (targetMouseY - mouseY) * 0.05;

      // Micro idle breathing rotation (slow, majestic, not endless orbital spin)
      const idle = prefersReducedMotion ? 0 : Math.sin(elapsed * 0.8) * 0.04;
      const idleY = prefersReducedMotion ? 0 : Math.cos(elapsed * 0.6) * 0.04;

      // Interpolate Core
      coreMesh.position.set(
        lerp(initialConfig.core.pos[0], finalConfig.core.pos[0], t),
        lerp(initialConfig.core.pos[1], finalConfig.core.pos[1], t) + idle,
        lerp(initialConfig.core.pos[2], finalConfig.core.pos[2], t)
      );
      coreMesh.rotation.set(
        lerp(initialConfig.core.rot[0], finalConfig.core.rot[0], t) + idle * 0.5,
        lerp(initialConfig.core.rot[1], finalConfig.core.rot[1], t) + (prefersReducedMotion ? 0 : elapsed * 0.08),
        lerp(initialConfig.core.rot[2], finalConfig.core.rot[2], t)
      );

      // Interpolate Sweeping Arc
      arcMesh.position.set(
        lerp(initialConfig.arc.pos[0], finalConfig.arc.pos[0], t),
        lerp(initialConfig.arc.pos[1], finalConfig.arc.pos[1], t) + idleY,
        lerp(initialConfig.arc.pos[2], finalConfig.arc.pos[2], t)
      );
      arcMesh.rotation.set(
        lerp(initialConfig.arc.rot[0], finalConfig.arc.rot[0], t),
        lerp(initialConfig.arc.rot[1], finalConfig.arc.rot[1], t) - (prefersReducedMotion ? 0 : elapsed * 0.04),
        lerp(initialConfig.arc.rot[2], finalConfig.arc.rot[2], t)
      );

      // Interpolate Horizon Ring
      ringMesh.position.set(
        lerp(initialConfig.ring.pos[0], finalConfig.ring.pos[0], t),
        lerp(initialConfig.ring.pos[1], finalConfig.ring.pos[1], t),
        lerp(initialConfig.ring.pos[2], finalConfig.ring.pos[2], t)
      );
      ringMesh.rotation.set(
        lerp(initialConfig.ring.rot[0], finalConfig.ring.rot[0], t) + idle * 0.3,
        lerp(initialConfig.ring.rot[1], finalConfig.ring.rot[1], t),
        lerp(initialConfig.ring.rot[2], finalConfig.ring.rot[2], t) + (prefersReducedMotion ? 0 : elapsed * 0.05)
      );

      // Interpolate Crest Fin
      finMesh.position.set(
        lerp(initialConfig.fin.pos[0], finalConfig.fin.pos[0], t),
        lerp(initialConfig.fin.pos[1], finalConfig.fin.pos[1], t) - idle,
        lerp(initialConfig.fin.pos[2], finalConfig.fin.pos[2], t)
      );
      finMesh.rotation.set(
        lerp(initialConfig.fin.rot[0], finalConfig.fin.rot[0], t),
        lerp(initialConfig.fin.rot[1], finalConfig.fin.rot[1], t) + (prefersReducedMotion ? 0 : elapsed * 0.06),
        lerp(initialConfig.fin.rot[2], finalConfig.fin.rot[2], t)
      );

      // Interpolate Pearl
      pearlMesh.position.set(
        lerp(initialConfig.pearl.pos[0], finalConfig.pearl.pos[0], t),
        lerp(initialConfig.pearl.pos[1], finalConfig.pearl.pos[1], t) + idleY * 1.5,
        lerp(initialConfig.pearl.pos[2], finalConfig.pearl.pos[2], t)
      );

      // Master Sculpture Mouse Tilt & Subtle Global Elevation
      masterSculpture.rotation.x = mouseY * 0.15 + (rawProgress - 0.5) * 0.2;
      masterSculpture.rotation.y = mouseX * 0.22 + (rawProgress * 0.3);

      renderer.render(scene, camera);
    };

    renderLoop();

    // Cleanup on unmount
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', onMouseMove);
      window.removeEventListener('resize', onResize);
      if (container && renderer.domElement && container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
      renderer.dispose();
      coreGeo.dispose();
      arcGeo.dispose();
      ringGeo.dispose();
      finGeo.dispose();
      pearlGeo.dispose();
      brushedSilverMat.dispose();
      coolPlatinumMat.dispose();
      iceChromeMat.dispose();
      deepTitaniumMat.dispose();
      pearlMat.dispose();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="about-sculpture-3d-viewport"
      style={{
        width: '100%',
        height: '520px',
        position: 'relative',
        cursor: 'grab'
      }}
    />
  );
}

