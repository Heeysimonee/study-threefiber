import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import { Environment } from "@react-three/drei";
import { Player } from "./Player";
import { Location } from "./Location";

export default function App() {
  return (
    <div className="w-full h-screen">
      <Canvas
        shadows
        camera={{ fov: 45 }}
      >
        <Environment
          files="/day.hdr"
          ground={{ scale: 100 }}
        />
        <ambientLight intensity={0.2} />
        <Physics timeStep="vary" gravity={[0, -10, 0]}>
          <Player />
          <Location />
        </Physics>
        {/* <PointerLockControls /> */}
      </Canvas>
    </div>
  );
}
