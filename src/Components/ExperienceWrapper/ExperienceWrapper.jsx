// * LIBRARIES
import { useState, useRef, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import {
  Bounds,
  ContactShadows,
  Scroll,
  ScrollControls,
  useScroll,
} from '@react-three/drei';
import { Leva } from 'leva';

// * COMPONENTS
import Experience from '../../Experience';
import AboutMe from '../UI/FauxPages/Pages/AboutMe';
import { interpolateFunc, backgroundSetter } from '../../Utils/utils';

const ScrollEffects = ({ setElementsVisible }) => {
  const shadowRef = useRef();
  const scrollData = useScroll();
  const [shadowOpacity, setShadowOpacity] = useState(0.35);

  useFrame(() => {
    // Normalize the scroll position (value between 0 and 1)
    const scrollPosition = scrollData.scroll.current;

    // Adjust shadow opacity based on scroll position
    const newShadowOpacity = Math.max(0.35 - scrollPosition * 4, 0);
    setShadowOpacity(newShadowOpacity);

    // Check if the elements should be visible based on the opacity threshold
    const elementsVisible = scrollPosition === 0; // Change threshold based on your needs
    setElementsVisible(elementsVisible);
  });

  return (
    <>
      <ContactShadows
        ref={shadowRef}
        opacity={shadowOpacity}
        scale={7.5}
        blur={1.2}
        color={'#001933'}
        position={[0, -0.9, 0]}
      />
    </>
  );
};

const ExperienceWrapper = () => {
  const [elementsVisible, setElementsVisible] = useState(true); // Track visibility state

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
        <ScrollControls pages={3} enabled={true} prepend={true}>
          <Scroll smooth={true}>
            <Bounds interpolateFunc={interpolateFunc}>
              {/* Pass elementsVisible to Experience component */}
              <Experience isElementsVisible={elementsVisible} />
            </Bounds>
            {/* Pass setElementsVisible to ScrollEffects */}
            <ScrollEffects setElementsVisible={setElementsVisible} />
          </Scroll>
          {/* <AboutMe /> */}
        </ScrollControls>
      </Canvas>
    </>
  );
};

export default ExperienceWrapper;
