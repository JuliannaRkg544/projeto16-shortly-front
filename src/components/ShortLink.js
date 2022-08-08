import { useState } from "react";
import styled from "styled-components";
import Header from "../Header";

export default function ShortLink(){
    const [url,setUrl] = useState("")
    return(
       <Style>
        <Header/>
       <input type="text" placeholder='Links que cabem no bolso' value={url} onChange={e=>setUrl(e.target.value)} ></input>.
      <div>
        
        <div className="links">

        </div>
      </div>
       </Style>
    )
}


const Style = styled.div`
  display: flex;
  margin-top: 200px;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 100px;

  input {
    width: 100%;
    padding: 10px 10px;
    margin-top: 60px;
    border: 1px solid rgba(120, 177, 89, 0.25);
    box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
    border-radius: 12px 12px ;
   
  }
  div{
    display: flex;
  }
  .links{
    width: 100%;
    padding: 10px 10px;
    margin-top: 60px;
    background-color: #80CC74;
    color: #fff;
    border: 1px solid rgba(120, 177, 89, 0.25);
    box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
    border-radius: 12px 12px ;
   
  }
`;
