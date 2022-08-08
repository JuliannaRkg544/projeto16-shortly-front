import Header from "../Header";
import Style from "./style/Style";
import { useContext, useState } from "react";
import UserContext from "../context/UserContext";
import axios from "axios"
import { useNavigate } from "react-router";
import dotenv from "dotenv"

dotenv.config()

const API_URL = process.env.REACT_APP_API_URL;

export default function Login(){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {user,setUser} = useContext(UserContext) 
    const navigate = useNavigate()

    function handlesubmmit(event){
        console.log(API_URL)
        event.preventDefault();
        const body = { email, password}
        axios.post(`${API_URL}`,body)
        .then(res=>{
            // setUser({name = })
            console.log(res.data)
            navigate("/signup")
        })
        .catch(err=> console.log(err.response.data))
    }
    
    return(
        
        <Style>
            <Header/>

            <div className="inputs"> 
            <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} ></input>
            <input type="password" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)} ></input>
            </div>
            <button onClick={handlesubmmit} > Entrar</button>
           
        </Style>
    )
}