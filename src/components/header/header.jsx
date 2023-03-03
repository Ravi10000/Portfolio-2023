import React from "react";
import "./header.styles.scss";
import Button from "../button/button";

export default function Header() {
  return (
    <header>
      <nav>
        {/* <li>About Me</li> */}
       <a href="#skills"> <li>Skills</li></a>
        <li>My Work</li>
        <li>Blogs</li>
        <li>
          <Button icon="/down.png" secondary small>
            Download CV
          </Button>
        </li>
      </nav>
    </header>
  );
}
