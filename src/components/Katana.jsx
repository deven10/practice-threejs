import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import Katana from "../../public/katana/Katana";

const KatanaComponent = () => {
  return (
    <div>
      <Canvas>
        <ambientLight />
        <OrbitControls />
        <Suspense fallback={null}>
          <Katana />
        </Suspense>
        <Environment preset="sunset" />
      </Canvas>
    </div>
  );
};

export default KatanaComponent;
