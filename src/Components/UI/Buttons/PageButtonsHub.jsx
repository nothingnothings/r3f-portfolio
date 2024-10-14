import gsap from 'gsap';
import { useEffect, useRef } from 'react';

export default function PageButtonsHub({
  roomPage,
  switchRoomPage,
  isFinishedBooting,
  accessInfoPages,
}) {
  const hubRef = useRef();

  useEffect(() => {
    if (isFinishedBooting) {
      showPanel();
    } else {
      hidePanel();
    }
  }, [isFinishedBooting]);

  const notebookPageSwitch = () => {
    switchRoomPage('notebook');
    // reload the page after 300ms:
    setInterval(() => window.location.reload(), 1500);
  };

  const infoPageSwitch = (infoPage) => {
    if (roomPage === 'notebook') {
      switchRoomPage(infoPage);
    } else {
      switchRoomPage(infoPage);
      accessInfoPages();
    }
  };

  const showPanel = () => {
    gsap.to(hubRef.current, {
      opacity: 1,
      delay: 2.5,
      duration: 1.5,
      onStart: () => {
        hubRef.current.style.display = 'block';
      },
      onComplete: () => {
        hubRef.current.style.pointerEvents = 'all';
      },
    });
  };

  const hidePanel = () => {
    if (hubRef.current) {
      gsap.to(hubRef.current, {
        opacity: 0,
        duration: 1.5,
        onStart: () => {
          hubRef.current.style.pointerEvents = 'none';
        },
        onComplete: () => {
          hubRef.current.style.display = 'none';
        },
      });
    }
  };

  return (
    <div
      className="d-flex justify-content-end pageButtonsHubWrapper interface titilium-web"
      style={{ zIndex: 100, height: '100%', pointerEvents: 'none', opacity: 0 }}
      ref={hubRef}
    >
      <div className="controls">
        <div className="section d-flex flex-column text-start">
          <button
            id="custom-btn"
            className={
              'btn p-0 m-0 btn--ghost' +
              (roomPage === 'notebook' ? ' active-button' : ' inactive-button')
            }
            onClick={notebookPageSwitch}
          >
            Book
          </button>
          <button
            id="custom-btn"
            className={
              'btn p-0 m-0 btn--ghost' +
              (roomPage === 'about' ? ' active-button' : ' inactive-button')
            }
            onClick={() => infoPageSwitch('about')}
          >
            About
          </button>
          <button
            id="custom-btn"
            className={
              'btn p-0 m-0 btn--ghost' +
              (roomPage === 'skills' ? ' active-button' : ' inactive-button')
            }
            onClick={() => infoPageSwitch('skills')}
          >
            Skills
          </button>
        </div>
      </div>
    </div>
  );
}
