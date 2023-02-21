import "./card.styles.scss";
import { useRef } from "react";
export default function Card({ image, title, dark }) {
  return (
    <div className={`card ${dark && "dark"}`}>
      <img src={image} alt={image} />
      <h4>{title}</h4>
    </div>
  );
}
