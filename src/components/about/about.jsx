import React from "react";
import "./about.styles.scss";
export default function About() {
  return (
    <div className="about">
      <div className="container">
        <div className="empty"></div>
        <div className="text-container">
          <h2 className="about-title">ABOUT ME</h2>
          <div className="text">
            <p>
              My name is <span>Ravi Sharma</span>. Educational background:
              <span>Bachelors in Computer Application</span> from MDU
            </p>
            <p>
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
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
