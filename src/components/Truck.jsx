import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import Scene from "../../public/Scene";

const Truck = () => {
  return (
    <div>
      <Canvas>
        <ambientLight />
        <OrbitControls />
        <Suspense fallback={null}>
          <Scene />
        </Suspense>
        <Environment preset="sunset" />
      </Canvas>
    </div>
  );
};

export default Truck;
