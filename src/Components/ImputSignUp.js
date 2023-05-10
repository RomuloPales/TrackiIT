import styled from "styled-components";
import { useNavigate } from "react-router-dom";
export default function SignUp() {
  const navigate = useNavigate();
  function handleSignUp(e) {
    e.preventDefault();
    navigate("/");
  }
  return (
    <Imputs>
      <StyledForm onSubmit={handleSignUp}>
        <input type="email" placeholder="email" />
        <input type="password" placeholder="senha" />
        <input type="text" placeholder="nome" />
        <input type="text" placeholder="foto" />
        <button type="submit">Cadastrar</button>
      </StyledForm>
    </Imputs>
  );
}

const Imputs = styled.div`
  width: 100%;
  height: 260px;

  input,
  button {
    width: 81%;
    font-size: 20px;
    height: 45px;
    border: 1px solid #d4d4d4;
    border-radius: 5px;
    margin-top: 5px;
  }
  button {
    text-align: center;
    color: white;
    background-color: #52b6ff;
    min-width: 84vw;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  input::placeholder {
    text-align: left;
    padding-left: 10px;
    color: #dbdbdb;
  }
  input {
    padding-left: 10px;
  }
`;
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;
