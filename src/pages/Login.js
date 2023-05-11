import Logo from "../Components/Logo";
import InputLogin from "../Components/ImputLogin";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function Login() {
  return (
    <>
      <Logo />
      <InputLogin />
      <LinkToSignUp to="/cadastro">
        {" "}
        Nao tem uma conta? Cadastre-se!
      </LinkToSignUp>
    </>
  );
}
const LinkToSignUp = styled(Link)`
  margin-top: 10px;
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
