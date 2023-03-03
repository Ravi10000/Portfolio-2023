import "./button.styles.scss";

export default function Button({ children, icon, secondary, small }) {
  return (
    <button className={`button ${secondary && "secondary"} ${small && 'small'}`}>
      {children} {icon && <img src={icon} alt="" />}
    </button>
  );
}
