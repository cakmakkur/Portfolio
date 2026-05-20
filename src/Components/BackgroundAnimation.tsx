import { useEffect, useRef, useState } from "react";
// @ts-expect-error importing THREE.js assets
import * as THREE from "three";
// prettier-ignore
import { anchor } from "./homepage_canvas_components.js";

export default function HomepageOther() {
  const [isPageLoaded, setIsPageLoaded] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const stars = useRef<THREE.Mesh[]>([]);
  const phaseOffsets = useRef<number[]>([]);

  useEffect(() => {
    setIsPageLoaded(true);
  }, []);

  useEffect(() => {
    if (!isPageLoaded || !canvasRef.current) return;

    /* ================= SCENE ================= */

    const scene = new THREE.Scene();

    const renderer = new THREE.WebGLRenderer({
      antialias: true,
      canvas: canvasRef.current,
    });

    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setClearColor("black");
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    renderer.toneMappingExposure = 1;

    /* ================= CAMERA ================= */

    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000,
    );

    // IMPORTANT: camera must be outside rotating system
    camera.position.set(0, 0, 40);

    /* ================= LIGHT ================= */

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(10, 10, 20);
    scene.add(directionalLight);

    /* ================= STARS ================= */

    // anchor is a shared singleton → MUST clear
    anchor.clear();
    stars.current = [];
    phaseOffsets.current = [];

    scene.add(anchor);

    const starGeometry = new THREE.SphereGeometry(0.05, 16, 16);
    const starMaterial = new THREE.MeshStandardMaterial({ color: 0xffffff });

    const addStar = () => {
      const star = new THREE.Mesh(starGeometry, starMaterial);

      star.position.set(
        THREE.MathUtils.randFloat(-150, 150),
        THREE.MathUtils.randFloat(-80, 80),
        THREE.MathUtils.randFloat(-200, 200),
      );

      stars.current.push(star);
      phaseOffsets.current.push(Math.random() * Math.PI * 2);
      anchor.add(star);
    };

    for (let i = 0; i < 1000; i++) addStar();

    /* ================= ANIMATION ================= */

    const clock = new THREE.Clock();

    const animate = () => {
      const t = clock.getElapsedTime();

      for (let i = 0; i < stars.current.length; i++) {
        const s = 0.5 + Math.abs(Math.sin(t + phaseOffsets.current[i]));
        stars.current[i].scale.setScalar(s);
      }

      // slow, safe rotation
      anchor.rotation.y += 0.00005;

      renderer.render(scene, camera);
      requestAnimationFrame(animate);
    };

    animate();

    /* ================= RESIZE ================= */

    const handleResize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight);
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
      renderer.dispose();
    };
  }, [isPageLoaded]);

  if (!isPageLoaded) {
    return (
      <div className="loading_div">
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <canvas
      ref={canvasRef}
      style={{
        width: "100%",
        height: "100vh",
        position: "absolute",
        top: 0,
        left: 0,
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}
