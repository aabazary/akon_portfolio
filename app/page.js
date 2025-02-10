"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { useGLTF } from "@react-three/drei";
import { motion } from "framer-motion";
import { useRef, useEffect, Suspense } from "react";
import * as THREE from "three";
import WheelNavigator from "./WheelNavigator";

const Supernova = () => {
  const { scene } = useGLTF("/supernova.glb");
  const supernovaRef = useRef();

  // Initial scale state
  const initialScale = 0.1;
  const finalScale = 1;

  useEffect(() => {
    scene.scale.set(initialScale, initialScale, initialScale);
    scene.traverse((child) => {
      if (child.isMesh && child.material) {
        child.material.envMapIntensity = 0.8;
        child.material.needsUpdate = true;
      }
    });
  }, [scene]);

  useFrame((state, delta) => {
    if (supernovaRef.current) {
      // Apply rotation
      scene.rotation.y += 0.2 * delta;

      // Smooth zoom-in effect
      const scaleFactor = THREE.MathUtils.lerp(scene.scale.x, finalScale, 0.01);
      scene.scale.set(scaleFactor, scaleFactor, scaleFactor);
    }
  });

  return <primitive ref={supernovaRef} object={scene} />;
};

export default function HomePage() {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center">
      <WheelNavigator nextRoute="/about" />

      {/* Header Section */}
      <div className="absolute top-[10vh] text-center">
        <motion.h1
          className="text-white text-5xl font-bold"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Akon Abazary
        </motion.h1>
        <motion.h2
          className="text-white text-2xl mt-2"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Full Stack Developer
        </motion.h2>
      </div>

      {/* 3D Model Section */}
      <div className="w-full h-[50vh] md:h-[60vh] lg:h-[70vh] flex justify-center items-center">
        <Canvas camera={{ position: [0, 0, 5] }} style={{ background: "transparent" }}>
          <Suspense fallback={null}>
            <ambientLight intensity={0.8} />
            <pointLight position={[10, 10, 10]} intensity={2} />
            <directionalLight position={[0, 10, 0]} intensity={1} />
            <Supernova />
          </Suspense>
        </Canvas>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-16 flex items-center text-white text-lg"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          y: {
            repeat: Infinity,
            repeatType: "reverse",
            duration: 2.5,
            ease: "easeInOut",
          },
          opacity: { duration: 1 },
        }}
      >
        <span className="ml-2">Scroll down to explore</span>
        <span className="text-xl pl-1 mb-1">↓</span> 
        
      </motion.div>
    </div>
  );
}
