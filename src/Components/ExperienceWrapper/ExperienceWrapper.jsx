// * LIBRARIES
import { useState, useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {
  Bounds,
  ContactShadows,
  OrbitControls,
  Scroll,
  ScrollControls,
  useScroll,
} from '@react-three/drei';
import { Leva } from 'leva';

// * COMPONENTS
import Experience from '../../Experience';
import AboutMe from '../UI/FauxPages/Pages/AboutMe';
import { interpolateFunc, backgroundSetter } from '../../Utils/utils';
import useNotebook from '../../store/useNotebook';

const ExperienceWrapper = () => {
  const isFinishedBooting = useNotebook((state) => state.isFinishedBooting);

  useEffect(() => {
    backgroundSetter();
  }, []);

  return (
    <>
      <Leva collapsed hidden />
      <Canvas
        camera={{
          fov: 60,
          near: 0.1,
          far: 100,
        }}
      >
        {/* <OrbitControls> */}
          <Bounds interpolateFunc={interpolateFunc}>
            <Experience />
          </Bounds>
          <ContactShadows
            opacity={0.35}
            scale={7.5}
            blur={1.2}
            color={'#001933'}
            position={[0, -0.9, 0]}
          />
        {/* </OrbitControls> */}
      </Canvas>
    </>
  );
};

export default ExperienceWrapper;
