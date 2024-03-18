import { Gltf } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";

export const Location = () => {
  const handleCollision = ({ manifold, target, other }: { manifold: any; target: any; other: any }) => {
    if (other.rigidBodyObject) {
      console.log(
        target.rigidBodyObject.name || "player",
        " collided with ",
        other.rigidBodyObject.name || "3D object"
      );
    }
  };
  return (
    <RigidBody
      type="fixed"
      colliders="trimesh"
      // onContactForce={(e) => console.log(e)}
      onCollisionEnter={handleCollision}
    >
      <Gltf
        castShadow
        receiveShadow
        // rotation={[-Math.PI / 2, 0, 0]}
        scale={10}
        position={[0, 4, 0]}
        src="/room.glb"
      />
    </RigidBody>
  );
};
