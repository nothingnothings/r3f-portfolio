// * LIBRARY IMPORTS
import React, { useRef, useEffect, useState } from 'react';
import { useControls, button } from 'leva';
import { useGLTF, useAnimations } from '@react-three/drei';
import gsap from 'gsap';
gsap.config({ nullTargetWarn: false });
import CustomEase from 'gsap/CustomEase';
gsap.registerPlugin(CustomEase);
CustomEase.create('in-out', '0.42,0,0.58,1');

// * COMPONENTS
import PresControls from './Controls/PresControls';
import LenovoBook from './Notebook/LenovoBook';
import Screens from './Notebook/Screens/Screens';
import HingeButtons from './UI/Buttons/HingeButtons';
import PowerButtons from './UI/Buttons/PowerButtons';
import RectLight from './Lights/RectLight';
import SocialMediaPanel from './UI/SocialMediaPanel/SocialMediaPanel';

// * UTILS
import { screenLightOn, screenLightOff } from '../Utils/utils';

export default function Room(props) {
  // * ZUSTAND STORE
  const {
    // finishLoading,
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
  } = props;

  // * GLTF MODEL
  const { nodes, materials, animations } = useGLTF(
    '/models/lenovo-notebook.glb'
  );

  // * NOTEBOOK SOUNDS:
  const [fanAudio] = useState(() => new Audio('/sounds/fan.mp3'));
  const [bootAudio] = useState(() => new Audio('/sounds/beep.wav'));

  // * LENOVO NOTEBOOK REFS
  const group = useRef();
  const lenovoBookRef = useRef();

  // * SCREEN REFS
  const linuxBootScreenHtmlRef = useRef();
  const linkedInHtmlRef = useRef();
  const githubHtmlRef = useRef();

  // * RECT AREA LIGHT REF
  const lightRef = useRef();

  // * OPEN/CLOSE BUTTON REFS
  const openButtonRef = useRef();
  const closeButtonRef = useRef();

  // * POWER ON/OFF BUTTON REFS
  const powerOnButtonRef = useRef();
  const powerOffButtonRef = useRef();

  // * UI REFS:
  const UIRef = useRef();

  // * MODEL ANIMATIONS
  const animationsObject = useAnimations(animations, group);

  // * LEVA CONTROLS
  const { position, rotation, scale } = useControls('Notebook', {
    position: { value: [0, 0, 0], step: 0.01 },
    rotation: { value: [0, 0, 0], step: 0.01 },
    scale: { value: 1, step: 0.1 },
  });

  const { htmlPosition, htmlRotation, distanceFactor } = useControls('HTML', {
    htmlPosition: { value: [0.0, 1.59, -1.57], step: 0.01 },
    htmlRotation: { value: [0, 0, 0], step: 0.01 },
    distanceFactor: { value: 0.6, step: 0.01 },
  });

  const { rectPosition, rectRotation } = useControls('RectAreaLight', {
    rectPosition: { value: [0, 1.4, -1.1], step: 0.01 },
    rectRotation: { value: [0, 3.14, 0], step: 0.01 },
  });

  useControls('Actions', {
    OpenLid: button(() => openNotebook()),
    CloseLid: button(() => closeNotebook()),
    PowerOn: button(() => powerNotebookOn()),
    PowerOff: button(() => powerNotebookOff()),
  });

  // * ANIMATION HANDLING:
  useEffect(() => {
    lenovoBookRef.current.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });

    const action = animationsObject.actions['Open'];
    action.play();
    action.halt();
  }, [animationsObject.actions]);

  // * LENOVOBOOK METHODS:
  const turnComputerFansOn = () => {
    // * Fade computer fan sound in:
    setTimeout(() => {
      fanAudio.volume = 0;
      fanAudio.play();

      const targetVolume = 0.2;
      const fadeDuration = 3000;
      const fadeInInterval = 100;

      let currentTime = 0;
      const interval = setInterval(function () {
        currentTime += fadeInInterval;

        fanAudio.volume = Math.min(
          (currentTime / fadeDuration) * targetVolume,
          targetVolume
        );

        if (currentTime >= fadeDuration || fanAudio.volume === targetVolume) {
          clearInterval(interval);
        }
      }, fadeInInterval);
    }, 1000);

    setTimeout(() => {
      turnComputerFansOff();
    }, 7000);
  };

  const turnComputerFansOff = () => {
    fanAudio.volume = 0.2;

    const fadeOutInterval = 50;
    const fadeSteps = 40;
    const initialVolume = fanAudio.volume;

    let currentStep = 0;

    const volumeDecrement = initialVolume / fadeSteps;

    const interval = setInterval(function () {
      currentStep++;

      const nextVolume = initialVolume - currentStep * volumeDecrement;

      fanAudio.volume = Math.max(nextVolume, 0);

      if (currentStep >= fadeSteps || fanAudio.volume === 0) {
        clearInterval(interval);
        fanAudio.pause();
        fanAudio.volume = initialVolume;
        fanAudio.loop = false;
      }
    }, fadeOutInterval);
  };

  // * PARAMETER OBJECTS:
  const groupParameters = {
    ref: group,
    ...props,
    dispose: null,
    scale: [scale, scale, scale],
    position: [position[0], position[1], position[2]],
    rotation: [rotation[0], rotation[1], rotation[2]],
  };

  const lenovoBookParameters = {
    nodes,
    materials,
    refName: lenovoBookRef,
  };

  const screenParameters = {
    isOpen,
    isPoweredOn,
    isFinishedBooting,
    bootScreenRef: linuxBootScreenHtmlRef,
    linkedInScreenRef: linkedInHtmlRef,
    gitHubScreenRef: githubHtmlRef,
    htmlPosition,
    htmlRotation,
    distanceFactor,
  };

  const hingeButtonParameters = {
    showLoadingScreen: props.showLoadingScreen,
    isNewVisit,
    isOpen,
    isPoweredOn,
    isFinishedBooting,
    animationsObject,
    open,
    close,
    openButtonRef,
    closeButtonRef,
    powerOnButtonRef,
    powerOffButtonRef,
    loadedPage,
    linkedInHtmlRef,
    githubHtmlRef,
    screenLightOn,
    screenLightOff,
    lightRef,
  };

  const powerButtonParameters = {
    bootAudio,
    turnComputerFansOn,
    turnComputerFansOff,
    powerOn,
    powerOff,
    finishBooting,
    powerOnButtonRef,
    powerOffButtonRef,
    closeButtonRef,
    linuxBootScreenHtmlRef,
    linkedInHtmlRef,
    githubHtmlRef,
    screenLightOn,
    screenLightOff,
    lightRef,
    loadedPage,
  };

  const rectLightParameters = {
    refName: lightRef,
    position: rectPosition,
    rotation: rectRotation,
    width: 8.5,
    color: '#ffffff',
    intensity: 0,
    height: 1.65,
  };

  const socialMediaPanelParameters = {
    githubHtmlRef: githubHtmlRef,
    linkedInHtmlRef: linkedInHtmlRef,
    UIRef: UIRef,
    isOpen,
    isPoweredOn,
    loadedPage,
    isFinishedBooting,
    switchPage,
  };

  return (
    <>
      <PresControls>
        <group {...groupParameters}>
          <LenovoBook {...lenovoBookParameters} />
          <Screens {...screenParameters} />
          {/* <HingeButtons {...hingeButtonParameters} /> */}
          {/* <PowerButtons {...powerButtonParameters} /> */}
          <RectLight {...rectLightParameters} />
        </group>
      </PresControls>
      <SocialMediaPanel {...socialMediaPanelParameters} />
    </>
  );
}

useGLTF.preload('/models/lenovo-notebook.glb');
