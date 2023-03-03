import "./website-card.styles.scss";

import React from "react";

export default function WebsiteCard({ site }) {
  return (
    <a href={site?.url} target="_blank">
      <div className="website-card">
        <img src={site?.img} alt={site?.name} className="website-img" />
        <div className="website-name">{site?.name}</div>
      </div>
    </a>
  );
}
