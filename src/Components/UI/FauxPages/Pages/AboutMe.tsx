import React from 'react';

import PageWrapper from '../PageWrapper';

export default function AboutMe() {
  return (
    <PageWrapper position={[3, 0, 0]} sectionId="about-section" title="about">
      <div className="mt-5 row d-flex justify-content-between align-items-center">
        <div className="d-none d-md-block col-md-5">
          <img src="" alt="image" className="img-fluid about-img" />
        </div>
        <div className="px-4 mx-auto text-justify px-md-5 col-md-7 about-description">
          <p className="lead">
            My name is <mark>Arthur Panazolo.</mark> I am a Full Stack Web
            Developer passionate about creating fast, responsive, and visually
            appealing web applications.
          </p>
          <p className="lead">
            With years of experience in the industry, I enjoy the challenge of
            turning ideas into functional, beautiful websites. I focus on
            practical solutions that meet real user needs.
          </p>
          <p className="lead">
            Check out the Work section below to see what I’ve been up to lately.
          </p>
        </div>
      </div>
    </PageWrapper>
  );
}
