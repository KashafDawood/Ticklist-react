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

export default function Btn({ children, onClick }) {
  return <Button onClick={onClick}>{children}</Button>;
}
