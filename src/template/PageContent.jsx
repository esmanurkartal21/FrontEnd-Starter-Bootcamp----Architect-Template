import React from "react";
import Project from "./Project";
import About from "./About";
import Contact from "./Contact";
import ImageOfLocation from "./ImageOfLocation";

function PageContent() {
  return (
    <>
      <div className="w3-content w3-padding" style={{ maxWidth: 1564 }}>
        <Project />
        <About />
        <Contact />
        <ImageOfLocation />
      </div>
    </>
  );
}

export default PageContent;
