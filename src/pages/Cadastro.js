import Logo from "../Components/Logo";
import SignUp from "../Components/ImputSignUp";
import styled from "styled-components";
import { Link } from "react-router-dom";
export default function cadastro() {
  return (
    <>
      <Logo />
      <SignUp />
      <LinkToLogin to="/"> Ja tem uma conta? Faça Login!</LinkToLogin>
    </>
  );
}

const LinkToLogin = styled(Link)`

  margin-top: 15px;
  display: flex;
  justify-content: center;
  color: #52b6ff;
  text-decoration-line: underline;
  font-family: "Lexend Deca", sans-serif;
  font-style: normal;
  font-weight: 400;
  font-size: 19.976px;
  line-height: 25px;
`;
