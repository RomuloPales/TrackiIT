import styled from 'styled-components'; 
import { Link } from 'react-router-dom';
import TrackIt from '../assets/TrackIt.png';
import { useContext } from 'react';
import { UserContext } from "../context/UserContext";



export default function Header(){
const {user} = useContext(UserContext);

return(
    <Topo>
        <div className="container">
                <Link to="/hoje">
                    <img src={TrackIt} alt="logo" key="logo" />
                </Link>
                <div>
                <Link to="/">
                    <img className="user-image" src={user.image} key="user" alt="user" />
                 </Link>
                </div>
            </div>
    </Topo>


)}


const Topo = styled.header`
    z-index: 10;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 70px;
    background: #126ba5;
    display: flex;
    justify-content: center;
    div.container {
        width: 90%;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    img.user-image {
        width: 51px;
        height: 51px;
        border-radius: 51%;
    }
`;