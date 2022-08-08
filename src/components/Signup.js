import { useState } from "react";
import Header from "../Header";
import Style from "./style/Style";

export default function Signup(){
    const [name,setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirmation, setpasswordConfirmation] = useState("")

   return(
    <Style>
    <Header/>
     <div className="inputs"> 
     <input type="text" placeholder="Nome" value={name} onChange={e => setName(e.target.value)} ></input>
     <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} ></input>
     <input type="password" placeholder="Senha" value={password} onChange={e => setPassword(e.target.value)} ></input>
     <input type="password" placeholder="Confirmar Senha" value={passwordConfirmation} onChange={e => setpasswordConfirmation(e.target.value)} ></input>
     </div>
     <button> Criar Conta </button>
    </Style>
    
   )
}

