import "./button.styles.scss";

export default function Button({ children, icon, secondary, small, ...otherProps }) {
  return (
    <button className={`button ${secondary && "secondary"} ${small && 'small'}`} {...otherProps}>
      {children} {icon && <img src={icon} alt="" />}
    </button>
  );
}
