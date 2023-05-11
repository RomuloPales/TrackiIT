import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import apiAuth from "../services/apiAuth";
import { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { ThreeDots } from "react-loader-spinner";

export default function InputLogin() {
  const [form, Setform] = useState({ email: "", password: "" });
  const [isLoading, setIsLoading] = useState(false); 
  const { setUser} = useContext(UserContext);
  const navigate = useNavigate();

  function handleChange(e) {
    Setform({ ...form, [e.target.name ]: e.target.value });
  }

  function handleLogin(e) {
    e.preventDefault();
    setIsLoading(true);
    apiAuth
      .login(form)
      .then((res) => {
        setIsLoading(false);
        const { id, name, token, image } = res.data;
        setUser({ id, name, token, image });
        navigate("/hoje");
      })
      .catch((err) => {
        setIsLoading(false);
        alert(err.response.data.message);
        console.log(err.response.data);
      });
  }
  return (
    <Imputs>
      <StyledForm onSubmit={handleLogin}>
        <StyledInput
          name="email"
          type="email"
          required
          disabled={isLoading}
          placeholder="email"
          value={form.email}
          onChange={handleChange}
        />

        <StyledInput
          name="password"
          type="password"
          required
          disabled={isLoading}
          placeholder="senha"
          value={form.password}
          onChange={handleChange}
        />

        <button disabled={isLoading} type="submit">
          {isLoading? (
          <ThreeDots width={50} height={50} color="#ffffff" />
            
            ) : "Entrar"}
        </button>
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
    font-size: 21px;
    display: flex;
    justify-content: center;
    align-items: center;
    
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
const StyledInput = styled.input``;
