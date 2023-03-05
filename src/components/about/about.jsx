import React from "react";
import "./about.styles.scss";
import Button from "../button/button";
export default function About() {
  return (
    <div className="about">
      <div className="container">
        <div className="img-container">
          <img src="about-bg.png" alt="about-background" />
        </div>
        <div className="text-container">
          <h2 className="about-title">ABOUT ME</h2>
          <div className="text">
            <p>
              Are you looking for a
              <span> perfect ui/ux designer / web developer</span> ?
            </p>
            <p>
              than you are in the <span>right place</span>
            </p>
            <p>
              get the <span>professional results</span> you are looking for
            </p>
            <p>
              <span>your work </span> will be done on time and{" "}
              <span>as you require</span>
            </p>
            <p>
              just react out and <span>let me know your needs</span>
            </p>
            <p>and leave the rest to me</p>
            <p>
              My name is <span>Ravi Sharma</span>.
            </p>
            <p>
              <span>Bachelors in Computer Application</span>
            </p>
            {/* <p>
              I am a <span>skilled</span> and dedicated professional with a
              passion for creating <span>innovative</span>,{" "}
              <span>functional</span>, and{" "}
              <span>visually appealing websites</span>.
            </p>
            <p>
              My ultimate goal is to help my clients achieve their objectives by
              delivering <span>high-quality</span>,{" "}
              <span>user-friendly websites</span> that deliver results.
            </p>
            <p>
              I always strive to deliver the best possible solution for my
              clients.
            </p> */}
            <a href="#form">
              <Button icon="/responsive.gif" secondary>
                Hire Me
              </Button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
