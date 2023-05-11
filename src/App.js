import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Hoje from "./pages/Hoje";
import Historico from "./pages/Historico";
import Habitos from "./pages/Habitos";
import Cadastro from "./pages/Cadastro";
import Error from "./pages/Error";
import { useState } from "react";
import { UserContext } from "./context/UserContext";

export default function App() {
  const [user, setUser] = useState({});
  return (
    <BrowserRouter>
      <UserContext.Provider value={{user, setUser}}>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/cadastro" element={<Cadastro/>} />
        <Route path="/habitos" element={<Habitos/>} />
        <Route path="/hoje" element={<Hoje/>} />
        <Route path="/historico" element={<Historico/>} />
        <Route path="*" element={<Error/>} />
      </Routes>
      </UserContext.Provider>
    </BrowserRouter>
  );
}
