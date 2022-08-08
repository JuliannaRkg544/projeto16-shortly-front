import { useState } from "react";
import Header from "../Header";
import Style from "./style/Style";
import dotenv from "dotenv"
import axios from "axios";
import { useNavigate } from "react-router";

export default function Signup(){
    const [name,setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPassword] = useState("")
     
    const navigate = useNavigate() 

    dotenv.config()

    const API_URL = process.env.REACT_APP_API_URL;


    function handlesubmmit(event){
        console.log(API_URL)
        event.preventDefault();
        const body = { name,email, password,confirmPassword, }
        axios.post(`${API_URL}/signup`,body)
        .then(res=>{
            console.log(res.data)
            navigate("/login")
        })
        .catch(err=> console.log(err.response.data))
    }

   return(

    <Style>
    <Header/>
     <div className="inputs"> 
     <input type="text" placeholder="Nome" value={name} onChange={e => setName(e.target.value)} ></input>
     <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} ></input>
     <input type="password" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)} ></input>
     <input type="password" placeholder="Confirmar Senha" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} ></input>
     </div>
     <button onClick={handlesubmmit} > Criar Conta </button>
    </Style>
    
   )
}

