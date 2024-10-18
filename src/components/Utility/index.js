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

export function PillBtn({ children, onClick, className }) {
  return (
    <button className={`pill-btn ${className}`} onClick={onClick}>
      {children}
    </button>
  );
}

export function FormField({
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
        <select className="input select" {...register(name, validation)}>
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
      );

    case "textarea":
      return (
        <textarea
          className="input textarea"
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
