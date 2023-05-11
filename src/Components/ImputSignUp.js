import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import apiAuth from "../services/apiAuth";
import { useState } from "react";
import { ThreeDots } from "react-loader-spinner";

export default function SignUp() {
  const [form, Setform] = useState({
    email: "",
    password: "",
    name: "",
    image: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  function handleChange(e) {
    Setform({ ...form, [e.target.name]: e.target.value });
  }

  function handleSignUp(e) {
    e.preventDefault();
    setIsLoading(true);
    apiAuth
      .signUp(form)
      .then((res) => {
        setIsLoading(false);
        alert("Cadastro realizado com sucesso!")
        navigate("/");
      })
      .catch((err) => {
        alert(err.response.data.message);
        setIsLoading(false);
      });
  }

  return (
    <Imputs>
      <StyledForm onSubmit={handleSignUp}>
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
        <StyledInput
          name="name"
          type="text"
          required
          disabled={isLoading}
          placeholder="nome"
          value={form.name}
          onChange={handleChange}
        />
        <StyledInput
          name="image"
          type="url"
          required
          disabled={isLoading}
          placeholder="foto"
          value={form.image}
          onChange={handleChange}
        />

        <button disabled={isLoading} type="submit">
          {isLoading ? (
            <ThreeDots width={50} height={50} color="#ffffff" />
          ) : (
            "Cadastrar"
          )}
        </button>
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
const StyledInput = styled.input``;
