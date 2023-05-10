import { Link } from "react-router-dom";
import styled from 'styled-components';

export default function SignUpOrSignIn({ option }) {
  return (
    <>
      <LinkSignUpOrSignIn>
        <Link to={option ? "/cadastro" : "/"}>
          {option ? (
            <p data-test="signup-link">Nao tem uma conta? Cadastre-se!</p>
          ) : (
            <p data-test="login-link">Ja tem uma conta? Faça Login!</p>
          )}
        </Link>
      </LinkSignUpOrSignIn>
    </>
  );
}


const LinkSignUpOrSignIn = styled.div`
    display: flex;
    width: 100%;
    margin-top: 25px;
    color: #52b6ff;
    justify-content: center;
    
    p{
        color:#52B6FF;
        text-decoration-line: underline;
        font-family: 'Lexend Deca', sans-serif;
        font-style: normal;
        font-weight: 400;
        font-size: 19.976px;
        line-height: 25px;
        
    }
`;