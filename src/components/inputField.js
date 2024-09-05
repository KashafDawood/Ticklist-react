import styled from "styled-components";

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

export default function InputField({ type, placeholder }) {
  return <Input type={type} placeholder={placeholder} />;
}
