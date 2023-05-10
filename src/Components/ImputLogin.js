import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function InputLogin() {
  const navigate = useNavigate();
  function handleLogin(e) {
    e.preventDefault();
    navigate("/hoje");
  }

  return (
    <Imputs>
      <StyledForm onSubmit={handleLogin}>
        <input type="email" placeholder="email" />
        <input type="password" placeholder="senha" />
        <button type="submit">Entrar</button>
      </StyledForm>
    </Imputs>
  );
}

const Imputs = styled.div`
  width: 100%;
  height: 160px;
  input,
  button {
    width: 81%;
    font-size: 20px;
    height: 45px;
    border: 1px solid #d4d4d4;
    border-radius: 5px;
    margin-top: 6px;
  }
  button {
    min-width: 84%;
    text-align: center;
    color: white;
    background-color: #52b6ff;
  }
  input::placeholder {
    text-align: left;
    padding-left: 10px;
    color: #dbdbdb;
  }
`;

const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;
