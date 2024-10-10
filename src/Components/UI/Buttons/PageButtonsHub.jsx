import { useEffect, useRef } from 'react';
import { Billboard, Html, Text } from '@react-three/drei';

export default function PageButtonsHub({}) {
  const hubRef = useRef();

  return (
    <div className="d-flex justify-content-end pageButtonsHubWrapper interface titilium-web">
      <div className="controls">
        <div className="section d-flex flex-column">
          <button className="btn px-4 py-3 btn--ghost">Home</button>
          <button className="btn px-4 py-3 btn--ghost">About</button>
          <button className="btn px-4 py-3 btn--ghost">Skills</button>
        </div>
      </div>
    </div>
  );
}
