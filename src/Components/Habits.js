import apiHabits from "../services/apiHabts";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../context/UserContext";
import { IconContext } from "react-icons";
import { MdAddBox } from "react-icons/md";

import styled from "styled-components";

export default function MyHabits() {
  const { user } = useContext(UserContext);
  const [habitsList, setHabitsList] = useState([]);
  const [isHidden, setIsHidden] = useState(true);
  useEffect(() => getHabitsList, []);

  function getHabitsList() {
    apiHabits
      .getHabits(user.token)
      .then((res) => {
        const apiHabits = res.data;
        setHabitsList(apiHabits);
      })
      .catch((err) => {
        console.log(err.response.data.message);
      });
  }

  function addHabit() {
    if (isHidden) {
      setIsHidden(false);
    } else {
      setIsHidden(true);
    }
  }
  return (
    <MainContainer>
      <AddHabit>
        <div>
          <p>Meus Habitos</p>
          <IconContext.Provider value={{ color: "#52b6ff", size: "3em" }}>
            <MdAddBox
              onClick={(e) => {
                addHabit(e);
              }}
            />
          </IconContext.Provider>
        </div>
      </AddHabit>
      <AddingHabit>
        
      </AddingHabit>
      <Button></Button>
    </MainContainer>
  );
}

const MainContainer = styled.div`
  margin-top: 92px;
  width: 100%;
  min-height: 100vh;
  .delet-confirmation {
    width: 90%;
    height: 90px;
    background: rgba(255, 255, 255, 0.8);
    position: fixed;
    top: 120px;
    left: 20px;
    font-size: 20px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-family: "Lexend Deca";

    div {
      width: 80%;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
  }
  ul {
    margin-top: 30px;
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
  }
  li {
    width: 90%;
    height: 91px;
    background: white;
    margin-bottom: 10px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: relative;
  }
  .buttons {
    width: 90%;
    margin-top: 10px;
  }
  p {
    width: 90%;
    color: #666666;
    font-size: 18px;
    font-style: normal;
    font-weight: 400;
    font-size: 22.976px;
    line-height: 29px;
    font-family: "Lexend Deca";
  }
  .trash {
    background: none;
    border: none;
    position: absolute;
    top: 15px;
    right: 5px;
  }
  .cancel {
    background: #52b6ff;
    font-family: "Lexend Deca";
  }
  .delet {
    background: #aa0000;
    font-family: "Lexend Deca";
  }
`;

const AddHabit = styled.div`
  display: flex;
  justify-content: center;
  div {
    display: flex;
    width: 90%;
    justify-content: space-between;
    align-items: center;
  }
  p {
    color: #126ba5;
    font-size: 23px;
    font-family: "Lexend Deca";
  }
`;

const AddingHabit = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  > div {
    width: 90%;
    height: 180px;
    background: white;
    margin-top: 20px;
  }
`;
const Button = styled.button`
  width: 85px;
  height: 35px;
  color: white;
  border-radius: 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
`;
