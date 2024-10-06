import React from 'react';

import PageWrapper from '../PageWrapper';

export default function AboutMe() {
  return <PageWrapper sectionId="about-section" title="about">
            <div className="mt-5 row d-flex justify-content-between align-items-center">
          <div className="d-none d-md-block col-md-5">
            <img src="./Sameer Bhilare _ Full Stack Developer_files/Sameer-About.png" alt="image" className="img-fluid about-img" style={{ opacity: 0 }} />
          </div>
          <div className="px-4 mx-auto text-justify px-md-5 col-md-7 about-description" style={{ opacity: 0 }}>
            <p className="lead">
              My name is <mark>Arthur Panazolo.</mark> I am a Full Stack Web Developer passionate about creating fast, responsive, and visually appealing web applications.
            </p>
            <p className="lead">
            With three years of experience in the industry, I enjoy the challenge of turning ideas into functional, beautiful websites. I focus on practical solutions that meet real user needs. 
            </p>
            {/* <p className="lead">
              My mantra for life is — <br/> <span className="font-italic"><mark>"Do what you love. Love what you do."</mark></span>
              <svg className="svg-inline--fa fa-smile fa-w-16" aria-hidden="true" data-prefix="far" data-icon="smile" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" data-fa-i2svg=""><path fill="currentColor" d=""></path></svg>
            </p> */}
            <p className="lead">
              Check out the Work section below to see what I’ve been up to lately.
            </p>
          </div>
        </div>
  </PageWrapper>;
}
