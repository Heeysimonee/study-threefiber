import {  Environment, PointerLockControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Physics } from "@react-three/rapier";
import { Player } from "./Player";
import { Floor } from "./Floor";
import {Box} from "./Box"

export default function App() {
  return (
    <div className="w-full h-screen">
      <div className="absolute top-1/2 left-1/2 w-5 h-5 border-2 border-white rounded-full transform -translate-x-1/2 -translate-y-1/2 z-50"></div>

      <Canvas
        camera={{ fov: 45, position: [0, 10, 0] }}
        shadows
      >
        <Environment
          files="/day.hdr"
          ground={{ scale: 100 }}
        />
        <ambientLight intensity={0.3} />
        <pointLight
          castShadow
          intensity={0.8}
          position={[100, 100, 100]}
        />
        <Physics debug>
          <Floor />
          <Player />
          <Box />
        </Physics>
        <PointerLockControls />
      </Canvas>
    </div>
  );
}
