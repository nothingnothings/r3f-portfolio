import { useEffect, useRef } from 'react';
import { Html } from '@react-three/drei';
import gsap from 'gsap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'; // Importing the icons

import { faEnvelope, faCode } from '@fortawesome/free-solid-svg-icons';

export default function SocialMediaPanel({
  linkedInHtmlRef,
  githubHtmlRef,
  UIRef,
  isOpen,
  isPoweredOn,
  loadedPage,
  isFinishedBooting,
  switchPage,
}) {
  // * LINK REFS
  const linkedInLinkRef = useRef();
  const githubLinkRef = useRef();

  useEffect(() => {
    if (isOpen && isPoweredOn && isFinishedBooting) {
      showPanel();
    } else {
      hidePanel();
    }
  }, [isOpen, isPoweredOn, isFinishedBooting]);

  const switchPages = (page) => {
    switchPage(page);
    if (isOpen && isPoweredOn && isFinishedBooting) {
      if (page === 'linkedIn') {
        gsap.to(githubHtmlRef.current, {
          opacity: 0,
          duration: 0.8,
        });

        gsap.to(linkedInHtmlRef.current, {
          opacity: 1,
          delay: 1,
          duration: 1,
          display: 'block',
          onStart: () => {
            linkedInLinkRef.current.style.pointerEvents = 'none';
            githubLinkRef.current.style.pointerEvents = 'none';
          },
          onComplete: () => {
            linkedInHtmlRef.current.style.display = 'block';
            githubHtmlRef.current.style.display = 'none';
            githubLinkRef.current.style.pointerEvents = 'auto';
          },
        });
      }

      if (page === 'github') {
        gsap.to(linkedInHtmlRef.current, {
          opacity: 0,
          duration: 0.8,
        });

        gsap.to(githubHtmlRef.current, {
          opacity: 1,
          delay: 1,
          duration: 1,
          onStart: () => {
            githubHtmlRef.current.style.display = 'block';
            linkedInLinkRef.current.style.pointerEvents = 'none';
            githubLinkRef.current.style.pointerEvents = 'none';
          },
          onComplete: () => {
            linkedInHtmlRef.current.style.display = 'none';
            linkedInLinkRef.current.style.pointerEvents = 'auto';
          },
        });
      }
    }
  };

  const showPanel = () => {
    gsap.to(UIRef.current, {
      opacity: 1,
      delay: 2.5,
      duration: 1.5,
      onStart: () => {
        UIRef.current.style.display = 'block';
      },
      onComplete: () => {
        UIRef.current.style.pointerEvents = 'all';
      },
    });
  };

  const hidePanel = () => {
    if (UIRef.current) {
      gsap.to(UIRef.current, {
        opacity: 0,
        duration: 1.5,
        onStart: () => {
          UIRef.current.style.pointerEvents = 'none';
        },
        onComplete: () => {
          UIRef.current.style.display = 'none';
        },
      });
    }
  };

  return (
    <Html
      ref={UIRef}
      transform
      position={[0.075, -2.65, 0]}
      center
      rotation={[-0.2, 0, 0]}
      style={{
        opacity: 0,
        display: 'none',
      }}
    >
      <div
        style={{
          bottom: `${Math.max(window.innerHeight, 1200) * 0.04}px`,
        }}
        className="social-media-panel-container"
      >
        <div className="social-media-panel">
          {/* LINKEDIN */}
          <div
            ref={linkedInLinkRef}
            className={
              'social-media-link ' +
              (loadedPage === 'linkedIn' ? 'social-active' : '')
            }
            onClick={() => {
              switchPages('linkedIn');
            }}
          >
            {/* <i className="fa fa-linkedin" /> */}
            <FontAwesomeIcon icon={faLinkedin} />
          </div>
          {/* GITHUB */}
          <div
            ref={githubLinkRef}
            className={
              'social-media-link ' +
              (loadedPage === 'github' ? 'social-active' : '')
            }
            onClick={() => {
              switchPages('github');
            }}
          >
            {/* <i className="fa fa-github" /> */}
            <FontAwesomeIcon icon={faGithub} />
          </div>
          {/* EMAIL */}
          <div className="social-media-link">
            <a href="mailto:arthur.panazolo@acad.pucrs.br">
              {/* <i className="fa fa-envelope" /> */}
              <FontAwesomeIcon icon={faEnvelope} />
            </a>
          </div>
          {/* CODE */}
          <div className="social-media-link">
            <a
              href="https://github.com/nothingnothings/r3f-portfolio/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {/* <i className="fa fa-code" /> */}
              <FontAwesomeIcon icon={faCode} />
            </a>
          </div>
        </div>
      </div>
    </Html>
  );
}
