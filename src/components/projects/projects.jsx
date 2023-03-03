import "./projects.styles.scss";

import React from "react";
import Editing from "./editing/editing";
import Websites from "./websites/websites";

export default function Projects() {
  return (
    <div className="projects">
      <Websites />
      <Editing />
    </div>
  );
}
