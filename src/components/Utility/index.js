import "./style.css";

export function Btn({ children, onClick, disable }) {
  return (
    <button className="btn" disabled={disable} onClick={onClick}>
      {children}
    </button>
  );
}

export function InputField({
  as = "input",
  type,
  placeholder,
  register,
  name,
  validation,
  options = [],
}) {
  switch (as) {
    case "select":
      return (
        <select className="input" {...register(name, validation)}>
          {options.map((option, index) => (
            <option key={index} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      );

    case "textarea":
      return (
        <textarea
          className="input"
          {...register(name, validation)}
          placeholder={placeholder}
        />
      );

    default:
      return (
        <input
          className="input"
          {...register(name, validation)}
          type={type}
          placeholder={placeholder}
        />
      );
  }
}

export function PillBtn({ children }) {
  return <button className="pill-btn">{children}</button>;
}
