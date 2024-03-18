// import { CuboidCollider, RigidBody } from "@react-three/rapier";
// import { useCallback, useRef, useState } from "react";

import { RigidBody } from "@react-three/rapier";
import { useCallback, useRef, useState } from "react";

export const Box = () => {
    const [hover, set] = useState<boolean | null>(null);
    const ref = useRef();
    const onMove = useCallback((e) => {
      e.stopPropagation();
      !hover && set(true)
      // set(Math.floor(e.faceIndex / 2));
    }, [hover]);
    const onOut = useCallback(() => set(false), []);
    const onClick = useCallback((e) => {
      console.log("hai selezionato un cubo")
      e.stopPropagation();
    }, []);
  return (
    <RigidBody
      // {...props}
      type="fixed"
      colliders="cuboid"
      ref={ref}
    >
      <mesh
      position={[10, 2, 0]}
        receiveShadow
        castShadow
        onPointerMove={onMove}
        onPointerOut={onOut}
        onClick={onClick}
      >
        {/* {[...Array(6)].map((_, index) => ( */}
          <meshStandardMaterial
            // attach={`material-${index}`}
            // key={index}
            // map={texture}
            color={hover ? "hotpink" : "white"}
          />
        {/* ))} */}
        <boxGeometry />
      </mesh>
    </RigidBody>
  );
};
