import "./button.styles.scss";

export default function Button({ children, icon, secondary }) {
  return (
    <button className={`button ${secondary && "secondary"}`}>
      {children} {icon && <img src={icon} alt="" />}
    </button>
  );
}
