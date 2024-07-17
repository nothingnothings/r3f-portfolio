// * LIBRARY IMPORTS
import { useEffect, useRef } from 'react';
import { useThree } from '@react-three/fiber';
import { Center, useBounds } from '@react-three/drei';
import { useControls } from 'leva';

// * ZUSTAND STORE
import useNotebook from './store/useNotebook';

// * COMPONENTS
import Env from './Components/Environment/Env';
import Room from './Components/Room';
import Captions from './Components/UI/Captions/Captions';
import WordCloudComponent from './Components/WordCloud/WordCloud';

export default function Experience() {
  // const scalingFactor = Math.min(Math.max(window.innerWidth / 1800, 0.6), 1.2);
  // const isMobile = window.innerWidth < 768; // 768px is the default breakpoint for mobile devices

  const { camera, viewport } = useThree();

  // * NEW VISIT, OPEN/CLOSE, POWERED ON/OFF and PAGE STATES
  const isNewVisit = useNotebook((state) => state.isNewVisit); // * Initially True
  const changeVisitStatus = useNotebook((state) => state.changeVisitStatus);
  const isOpen = useNotebook((state) => state.isOpen); // * Initially False
  const isPoweredOn = useNotebook((state) => state.isPoweredOn); // * Initially False
  const isFinishedBooting = useNotebook((state) => state.isFinishedBooting); // * Initially False
  const loadedPage = useNotebook((state) => state.loadedPage); // * Initially 'linkedIn'

  // * OPEN/CLOSE STATE METHODS
  const open = useNotebook((state) => state.open);
  const close = useNotebook((state) => state.close);

  // * POWER ON/OFF STATE METHODS
  const powerOn = useNotebook((state) => state.powerOn);
  const powerOff = useNotebook((state) => state.powerOff);
  const finishBooting = useNotebook((state) => state.finishBooting);

  // * SWITCH PAGE METHODS
  const switchPage = useNotebook((state) => state.switchPage);

  // * BOUNDS-RELATED LOGIC:
  const bounds = useBounds();
  const roomGroupRef = useRef();

  useEffect(() => {
    // Calculate scene bounds
    camera.position.set(0, 1, 3.5);
    roomGroupRef.current.position.set(0, 0.35, 0);

    bounds.refresh(camera).clip().fit();

    roomGroupRef.current.visible = true;
  }, [window.innerWidth, window.innerHeight]);

  // * ROOM PROPS
  const roomProps = {
    isNewVisit,
    isOpen,
    isPoweredOn,
    isFinishedBooting,
    loadedPage,
    open,
    close,
    powerOn,
    powerOff,
    finishBooting,
    switchPage,
  };

  // * CAPTIONS PROPS
  const captionsProps = {
    isNewVisit,
    changeVisitStatus,
    isOpen,
    isPoweredOn,
    isFinishedBooting,
    loadedPage,
  };

  // * WORD CLOUD PROPS
  const wordCloudComponentProps = {
    isOpen,
    isPoweredOn,
  };

  const {} = useControls('Camera', {
    position: {
      value: [0.3, 1.5, 6],
      step: 0.01,
      onChange: (value) => camera.position.set(...value),
    },
    rotation: {
      value: [0, 0, 0],
      step: 0.01,
      onChange: (value) => camera.rotation.set(...value),
    },
  });

  return (
    <>
      <Env />
      <Center>
        <group ref={roomGroupRef} visible={false}>
          <Room {...roomProps} />
          <WordCloudComponent {...wordCloudComponentProps} />
        </group>
      </Center>
      <Captions {...captionsProps} />
    </>
  );
}

