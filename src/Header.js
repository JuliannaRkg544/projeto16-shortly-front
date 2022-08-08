import shortly from "./assets/imgs/Vector.png"
import styled from "styled-components"

export default function Header (){
    return(
    <Style>
        <h1>Shortly</h1>
        <img src={shortly} />
    </Style>)
}

const Style = styled.div`
position: fixed;
top:0;
left: 0;
right: 0;
width: 100%;
margin-top: 80px;
display: flex;
justify-content: center;
h1{
    font-weight: 200;
    font-size: 64px;
    color: #000;
}

`