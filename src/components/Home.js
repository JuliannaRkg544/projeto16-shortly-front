import Header from "../Header";
import trophy from "../assets/imgs/Vectorthophy.png";
import styled from "styled-components";
import axios from "axios";
import dotenv from "dotenv";
import { useEffect, useState } from "react";

dotenv.config();

const API_URL = process.env.REACT_APP_API_URL;

export default function Home() {
  const [urls, setUrls] = useState([]);

  useEffect(() => {
    axios
      .get(`${API_URL}/ranking`)
      .then((res) => {
        console.log(res.data);
        setUrls(res.data);
      })
      .catch((err) => console.log(err.response.data));
  }, []);

  return (
    <Style>
      <Header />
      <div className="top">
        <img src={trophy} />
        <p> Ranking</p>
      </div>
      <main>
        {urls.map((url, i) => {
          return (
            <div className="ranking" >
              <p>
                {i + 1}. 
                {url.name} -
                {url.linksCount} links - 
                 {url.visitCount} visualizações
              </p>
            </div>
          );
        })}
      </main>
    </Style>
  );
  
}

const Style = styled.div`
  display: flex;
  margin-top: 200px;
  width: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 0 100px;
  .top {
    display: flex;
    p {
      font-weight: 700;
    }
  }

  main {
    width: 100%;
    padding: 10px 10px;
    margin-top: 60px;
    border: 1px solid rgba(120, 177, 89, 0.25);
    box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
    border-radius: 24px 24px 0px 0px;
   
  }
  .ranking{
    p{
        margin-top: 10px;
    }
  }
`;
