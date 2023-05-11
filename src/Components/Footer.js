import styled from 'styled-components';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Link } from 'react-router-dom';
import { useContext } from "react";
import { ProgressContext } from "../context/ProgressContext";


export default function Footer() {
    const { progress } = useContext(ProgressContext);
    return (
        <Footers>
            <div className="container" data-test="menu">
                <Link to="/habitos" data-test="habit-link"  >
                    <p>Habitos</p>
                </Link>
                <Link to="/hoje" data-test="today-link">
                    <Today>
                        <CircularProgressbar
                            background={true}
                            backgroundPadding={7}
                            value={progress}
                            text="Hoje"
                            styles={buildStyles({
                                pathColor: 'white',
                                trailColor: '#52b6ff',
                                textColor: 'white',
                                backgroundColor: '#52b6ff',
                            })}
                        ></CircularProgressbar>
                    </Today>
                </Link>
                <Link to="/historico" data-test="history-link">
                    <p>Historico</p>
                </Link>
            </div>
        </Footers>
    );
}

const Footers = styled.footer`
    width: 100%;
    height: 70px;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    bottom: 0;
    left: 0;
    p{
        font-family: 'Lexend Deca';
        font-style: normal;
        font-weight: 400;
        font-size: 17.976px;
        line-height: 22px;
        text-align: center;
        color: #52B6FF;
    }
    a {
        text-decoration: none;
    }
    div.container {
        width: 90%;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    div {
        font-size: 18px;
        color: #52b6ff;
    }
`;

const Today = styled.div`
    width: 91px;
    height: 91px;
    margin-bottom: 60px;
    font-family: 'Lexend Deca';
    font-style: normal;
    font-weight: 400;
    font-size: 17.976px;
    line-height: 22px;
    text-align: center;
    color: #FFFFFF;
`;