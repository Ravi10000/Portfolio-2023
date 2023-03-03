import "./websites.styles.scss";

import React from "react";
import websiteList from "./websites-list";
import WebsiteCard from "./website-card/website-card";

export default function Websites() {
  return (
    <div className="websites-container">
      <h3 className="__sub-heading">Websites</h3>
      <div className="websites">
        {websiteList?.map((site) => (
          <WebsiteCard site={site} key={site?.name} />
        ))}
      </div>
    </div>
  );
}
