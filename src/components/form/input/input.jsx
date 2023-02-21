import "./input.styles.scss";

export default function Input({ type, label, textarea }) {
  return (
    <div className="input-container">
      {textarea ? (
        <textarea id={label} className="input"></textarea>
      ) : (
        <input id={label} className="input" type={type || "text"} />
      )}
      <label htmlFor={label}>{label}</label>
    </div>
  );
}
