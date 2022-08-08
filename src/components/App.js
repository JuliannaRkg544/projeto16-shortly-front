import Header from "../Header";
import Signup from "./Signup";
import Home from "./Home";
import { BrowserRouter, Route, Routes, UNSAFE_RouteContext } from "react-router-dom";
import Login from "./Login";
import UserContext from "../context/UserContext";
import { useState } from "react";
import ShortLink from "./ShortLink";

export default function App(){
    const [user, setUser] = useState("")
    return(
      <UserContext.Provider value = {{user, setUser}}>
        <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/signup" element={<Signup/>} />
            <Route path="/login" element={<Login/>} />
            <Route path="/shortly" element={<ShortLink/>} />
        </Routes>
        </BrowserRouter>
        </UserContext.Provider>
    )
}