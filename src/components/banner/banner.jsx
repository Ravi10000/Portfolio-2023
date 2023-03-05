import React from "react";
import "./banner.styles.scss";
import Button from "../button/button";

export default function Banner() {
  return (
    <div className="banner">
      <div className="main">
        <div className="left">
          {/* <div className="circle-bg"></div> */}
          <img src="/blob.svg" alt="blob" className="circle-bg" />
          <img className="hero-bg" src="/hero-color-edited.png" alt="hero" />
        </div>
        <div className="right">
          <h1 className="name">
            <span>Ravi</span>
            <br /> Sharma
          </h1>
          <p className="subtitle">FULL STACK WEB DEVELOPER👨‍💻</p>

          <div className="buttons-container">
            <a href="#form">
              <Button icon="/code.png">Hire Me</Button>
            </a>
            <a href="#projects">
              <Button icon="/work.png" secondary>
                My Work
              </Button>
            </a>
          </div>
        </div>
        <div className="bg-sign">
          <svg
            width="464"
            height="347"
            viewBox="0 0 464 347"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="sign"
              d="M59.3645 118.539C60.7315 188.254 64.2308 397.365 65.173 327.643C65.962 269.258 63.833 210.792 65.8184 152.422C67.454 104.334 72.7993 49.3932 98.0876 6.88742C100.869 2.21273 102.405 17.2673 102.121 22.6993C100.549 52.8266 95.3556 83.04 84.8572 111.44C73.7651 141.445 57.5257 169.026 35.0013 191.79C34.8307 191.962 15.052 212.899 9.02453 207.602C-8.65279 192.067 37.2133 178.279 44.198 178.56C88.5806 180.345 134.154 207.821 178.438 187.918C197.838 179.199 210.936 160.411 213.611 139.675C215.361 126.113 209.939 118.413 195.863 122.411C186.099 125.185 100.798 176.47 112.286 184.368C121.354 190.603 148.876 169.844 153.429 166.62C159.284 162.475 183.381 135.446 191.991 135.319C201.082 135.185 198.925 210.536 212.321 205.02C220.635 201.597 249.533 145.442 253.948 148.549C260.476 153.143 252.015 159.682 265.081 159.682C292.234 159.682 321.092 147.638 347.206 141.773C364.55 137.877 383.681 132.568 401.58 136.61C412.571 139.092 423.004 143.688 434.01 146.29C439.272 147.535 463.081 147.539 457.244 156.294"
              stroke="#2D2D2D"
              strokeWidth="10"
              strokeLinecap="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
