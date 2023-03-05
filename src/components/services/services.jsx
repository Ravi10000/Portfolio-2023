import "./services.styles.scss";

import React from "react";
import Card from "./card/card";

export default function Services() {
  return (
    <div className="services-container">
      <h2 className="services-title">SERVICES THAT I OFFER👨‍💻</h2>
      <section className="services-section">
        <Card
          image="/ui-ux.gif"
          title={
            <>
              ui/ux <br />
              design
            </>
          }
        />
        <Card
          image="/ux-dark.gif"
          dark
          title={
            <>
              website <br />
              development
            </>
          }
        />
        <Card
          dark
          image="/photo-editing-dark.gif"
          title={
            <>
              photo <br />
              editing
            </>
          }
        />
        <Card
          image="/gd.gif"
          // dark
          title={
            <>
              graphic <br />
              design
            </>
          }
        />
      </section>
    </div>
  );
}
