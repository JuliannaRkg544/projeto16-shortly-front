import shortly from "./assets/imgs/Vector.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
import UserContext from "./context/UserContext";
import { useContext } from "react";
import axios from "axios";

export default function Header() {
    // const {user,setUser} = useContext(UserContext) 
    const user =  localStorage.getItem("user")
    if (!user){
        return (
            <>
              <Top>
                <div>
                  <Link to={"/login"}>
                  
                    <p> Entrar </p>
                  </Link>
                  <Link to={"/signup"}>
                   
                    <p>Cadastre-se</p>{" "}
                  </Link>
                </div>
              </Top>
              <Style>
                <h1>Shortly</h1>
                <img src={shortly} />
              </Style>
            </>
          );
    } else {
        return (
            <>
              <Top>
                <div>
                <Link to={"/shortly"}>
                    <p> Seja bem vindo {user} </p>
                  </Link>
                  <Link to={"/"}>
                    <p> Home </p>
                  </Link>
                  <Link to={"/"}>
                    <p> Ranking </p>
                  </Link>
                  <Link to={"/login"}>
                    <p onClick={()=>logout()}>Sair</p>{" "}
                  </Link>
                </div>
              </Top>
              <Style>
                <h1>Shortly</h1>
                <img src={shortly} />
              </Style>
            </>
          );
    }
 
    function logout(){
        localStorage.removeItem("user")
    }
}

const Top = styled.div`
  top: 20px;
  display: flex;
  width: 100vw;
  position: fixed;
  padding-right: 80px;
  padding-left: 80px;
  margin-right: 20px;
  a {
    text-decoration: none;
    color: #000;
    width: 100%;
    display: flex;
  }
  div {
    display: flex;
    width: 100vw;
    justify-content: space-evenly;

     }
  p{
    width: 100%;
   

  }
`;

const Style = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  margin-top: 80px;
  display: flex;
  justify-content: center;
  h1 {
    font-weight: 200;
    font-size: 64px;
    color: #000;
  }
`;
