import styled from "styled-components";
import Header from "../Components/Header";
import MyHabits from "../Components/Habits";
import Footer from "../Components/Footer";
export default function Habitos() {
  return (
    <Main>
     <Header/>
     <MyHabits/>
     <Footer/>
    </Main>
  );
}

const Main = styled.main`
  background: #f0f0f0;
  display: flex;
  height: 100%;
  margin-bottom: 92px;
`;
