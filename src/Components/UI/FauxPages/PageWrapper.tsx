import React from 'react';

import { Html } from '@react-three/drei';

export default function PageWrapper({ children, sectionId, title }) {
  return (
    <Html>
      <section id={sectionId} className="work-section">
        <div className="text-center row">
          <div className="m-4 col work-title" style={{ opacity: 0 }}>
            <h1 className="mb-3 display-5">{title}</h1>
            <div className="underline"></div>
          </div>
        </div>
        <div className="container">{children}</div>
      </section>
    </Html>
  );
}
