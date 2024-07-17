import { Html } from '@react-three/drei';
import { useEffect, useRef } from 'react';

function LinuxBootScreen({
  refName,
  distanceFactor,
  htmlPosition,
  htmlRotation,
}) {
  return (
    <Html
      transform
      wrapperClass="bootScreen"
      distanceFactor={distanceFactor}
      position={htmlPosition}
      rotation={htmlRotation}
      rotation-x={-0.256}
      ref={refName}
    >
      <img src="./images/boot_sequence.gif"></img>
    </Html>
  );
}

function LinkedInScreen({
  refName,
  distanceFactor,
  htmlPosition,
  htmlRotation,
}) {
  return (
    <Html
      transform
      wrapperClass="linkedInScreen"
      distanceFactor={distanceFactor}
      position={htmlPosition}
      rotation={htmlRotation}
      rotation-x={-0.256}
      ref={refName}
      style={{
        opacity: 0,
        display: 'none',
      }}
    >
      <div className="linkedInScreen">
        <img src="./images/linkedin-printscreen.png"></img>
      </div>
    </Html>
  );
}

function GitHubScreen({ refName, distanceFactor, htmlPosition, htmlRotation }) {
  return (
    <Html
      transform
      wrapperClass="githubHtmlScreen"
      distanceFactor={distanceFactor}
      position={htmlPosition}
      rotation={htmlRotation}
      rotation-x={-0.256}
      ref={refName}
      style={{
        opacity: 0,
        cursor: 'default',
      }}
    >
      <div className="githubScrollbarHider">
        <iframe
          id="github-frame"
          title="GitHub"
          style={{ pointerEvents: 'none' }}
          src="https://portfolio-remote.vercel.app/api/github-proxy"
        />
      </div>
    </Html>
  );
}

export default function Screens({
  isOpen,
  isPoweredOn,
  isFinishedBooting,
  bootScreenRef,
  linkedInScreenRef,
  gitHubScreenRef,
  htmlPosition,
  htmlRotation,
  distanceFactor,
}) {
  return (
    <>
      {isOpen && isPoweredOn && !isFinishedBooting && (
        <LinuxBootScreen
          refName={bootScreenRef}
          distanceFactor={distanceFactor}
          htmlPosition={htmlPosition}
          htmlRotation={htmlRotation}
        />
      )}
      <LinkedInScreen
        refName={linkedInScreenRef}
        distanceFactor={distanceFactor}
        htmlPosition={htmlPosition}
        htmlRotation={htmlRotation}
      />
      <GitHubScreen
        refName={gitHubScreenRef}
        distanceFactor={distanceFactor}
        htmlPosition={htmlPosition}
        htmlRotation={htmlRotation}
      />
    </>
  );
}
