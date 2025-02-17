import React, { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, useGLTF, useAnimations, useTexture } from "@react-three/drei";
import { motion } from "framer-motion";

const BeeModel = () => {
  const { scene, animations } = useGLTF("/src/assets/models/realistic-bee.glb");
  const { actions } = useAnimations(animations, scene);

  const textures = useTexture({
    map: "/src/assets/models/textures/bee_color.png",        
    normalMap: "/src/assets/models/textures/bee_normal.png", 
    roughnessMap: "/src/assets/models/textures/bee_roughness.png", 
    metalnessMap: "/src/assets/models/textures/bee_metallic.png",  
    wingscolorMap: "/src/assets/models/textures/bee_wingscolor.png" 
  });

  useEffect(() => {
    if (actions) {
      Object.values(actions).forEach((action) => action.play());
    }
  }, [actions]);

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.material.map = textures.map;
        child.material.normalMap = textures.normalMap;
        child.material.roughnessMap = textures.roughnessMap;
        child.material.metalnessMap = textures.metalnessMap;
        child.material.wingscolorMap = textures.wingscolorMap;
        child.material.needsUpdate = true;
      }
    });
  }, [scene, textures]);

  return <primitive object={scene} scale={0.3} position={[0, 0, 0]} />;
};

const RealisticBee = () => {
  return (
    <motion.div
      className="bee-container"
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "400px",
        height: "60%",
        zIndex: 1000,
        cursor: "grab",
        pointerEvents: "auto",
      }}
      drag
      dragConstraints={{ left: -1000, right: 1000, top: -1000, bottom: 1000 }}
      whileTap={{ scale: 0.9 }}
    >
      <Canvas style={{ height: "100%", width: "100%" }} camera={{ position: [0, 1, 5], fov: 50 }}>
        <ambientLight intensity={0.8} />
        <directionalLight position={[2, 2, 2]} intensity={1.5} />
        <pointLight position={[0, 5, 0]} intensity={2} />
        <hemisphereLight skyColor={"#ffffff"} groundColor={"#444444"} intensity={1} />

        <Suspense fallback={null}>
          <BeeModel />
        </Suspense>

        <OrbitControls enableZoom={false} enablePan={true} autoRotate={false} />
      </Canvas>
    </motion.div>
  );
};

export default RealisticBee;





