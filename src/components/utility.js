import styled from "styled-components";

const Button = styled.button`
  padding: 10px;
  width: 100%;
  background-color: #ad49e1;
  color: white;
  border: 1px solid #444;

  &:hover {
    background-color: transparent;
    color: black;
    transition: 0.7s;
    cursor: pointer;
  }
`;

const Input = styled.input`
  padding: 10px;
  width: 100%;
  max-width: 95%;
  display: block;
  margin: 10px 0;
  border: 1px solid #e3e2e0;

  &:focus {
    outline: none;
  }
`;

export function Btn({ children, onClick }) {
  return <Button onClick={onClick}>{children}</Button>;
}

export function InputField({ type, placeholder, value, onChange }) {
  return (
    <Input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
}
