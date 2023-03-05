import "./projects.styles.scss";

import React from "react";
import Editing from "./editing/editing";
import Websites from "./websites/websites";

export default function Projects() {
  return (
    <div className="projects">
      <h2 className="projects-title">WHAT HAVE I DONE SO FAR🛠</h2>
      <Websites />
      <Editing />
    </div>
  );
}
