import "./projects.styles.scss";

import React from "react";
import Editing from "./editing/editing";
import Websites from "./websites/websites";
import Animations from "./animations/animations";

export default function Projects() {
  return (
    <div className="projects" id="projects">
      <h2 className="projects-title">WHAT HAVE I DONE SO FAR🛠</h2>
      <Websites />
      <Animations />
      <Editing />
    </div>
  );
}
