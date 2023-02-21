import "./services.styles.scss";

import React from "react";
import Card from "./card/card";

export default function Services() {
  return (
    <>
      <h2 className="services-title">SERVICES THAT I OFFER</h2>
      <section className="services-section">
        <Card
          image="/ui-ux.png"
          title={
            <>
              ui/ux <br />
              design
            </>
          }
        />
        <Card
          image="/coding.png"
          dark
          title={
            <>
              website <br />
              development
            </>
          }
        />
        <Card
          image="/gd.png"
          dark
          title={
            <>
              graphic <br />
              design
            </>
          }
        />
        <Card
          image="/edit.png"
          title={
            <>
              photo <br />
              editing
            </>
          }
        />
      </section>
    </>
  );
}
