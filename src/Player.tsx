import { KeyboardControls } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import Controller from "ecctrl";

const keyboardMap = [
  { name: "forward", keys: ["ArrowUp", "KeyW"] },
  { name: "backward", keys: ["ArrowDown", "KeyS"] },
  { name: "leftward", keys: ["ArrowLeft", "KeyA"] },
  { name: "rightward", keys: ["ArrowRight", "KeyD"] },
  { name: "jump", keys: ["Space"] },
  { name: "run", keys: ["Shift"] },
];
export function Player() {
  return (
    <KeyboardControls map={keyboardMap}>
      <Controller maxVelLimit={5} camInitDis={-1}>
        <RigidBody
          colliders={false}
          mass={1}
          type="dynamic"
          position={[0, 0, 0]}
          // enabledRotations={[false, false, false]}
        >
          {/* <CapsuleCollider args={[0.75, 0.5]} /> */}
        </RigidBody>
      </Controller>
    </KeyboardControls>
  );
}
