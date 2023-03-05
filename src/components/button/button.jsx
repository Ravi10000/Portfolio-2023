import "./button.styles.scss";

export default function Button({
  children,
  icon,
  secondary,
  outline,
  small,
  ...otherProps
}) {
  return (
    <button
      className={`button ${secondary && "secondary"} ${outline && "outline"} ${
        small && "small"
      }`}
      {...otherProps}
    >
      {children} {icon && <img src={icon} alt="" />}
    </button>
  );
}
