import "./style.css";

export function Btn({ children, onClick, disable }) {
  return (
    <button className="btn" disabled={disable} onClick={onClick}>
      {children}
    </button>
  );
}

export function InputField({ type, placeholder, register, name, validation }) {
  return (
    <input
      className="input"
      {...register(name, validation)}
      type={type}
      placeholder={placeholder}
    />
  );
}

export function PillBtn({ children }) {
  return <button className="pill-btn">{children}</button>;
}
