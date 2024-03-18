import { CuboidCollider, RigidBody } from "@react-three/rapier";

export const Floor = () => {
  return (
    <RigidBody
      type="fixed"
      colliders={false}
    >
      <mesh
        receiveShadow
        position={[0, 0, 0]}
        rotation-x={-Math.PI / 2}
      >
        <planeGeometry args={[20, 20]}></planeGeometry>
        <meshBasicMaterial color={"gray"} />
      </mesh>
      <CuboidCollider
        args={[20, 2, 20]}
        position={[0, -2, 0]}
      />
    </RigidBody>
  );
};
