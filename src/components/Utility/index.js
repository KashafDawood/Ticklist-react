import styled from "styled-components";

const Button = styled.button`
  padding: 10px;
  width: 100%;
  background-color: var(--button-bg-color);
  color: white;
  border: 1px solid var(--border-color);

  &:hover {
    background-color: var(--accent-color);
    color: white;
    transition: 0.7s;
    cursor: pointer;
  }
`;

const Input = styled.input`
  background-color: transparent;
  color: var(--primary-text-color);
  padding: 10px;
  width: 100%;
  max-width: 95%;
  display: block;
  margin: 10px 0;
  border: 1px solid var(--border-color);

  &:focus {
    outline: none;
  }
`;

export function Btn({ children, onClick, disable }) {
  return (
    <Button disabled={disable} onClick={onClick}>
      {children}
    </Button>
  );
}

export function InputField({ type, placeholder, register, name, validation }) {
  return (
    <Input
      {...register(name, validation)}
      type={type}
      placeholder={placeholder}
    />
  );
}
