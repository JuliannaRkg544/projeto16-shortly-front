import axios from "axios";
import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import Header from "../Header";
import dotenv from "dotenv";
import trash from "../assets/imgs/Vectortrash.png";
import UserContext from "../context/UserContext";

dotenv.config();

const API_URL = process.env.REACT_APP_API_URL;

export default function ShortLink() {
  const [url, setUrl] = useState("");
  const [geturl, setgeturl] = useState(false);

  const token = localStorage.getItem("token");
  const [userLinks, setUserLinks] = useState([]);
  let visitcount = 0;
  const config = {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  };
  function getUrlByUser() {
    axios
      .get(`${API_URL}/users/me`, config)
      .then((res) => {
        console.log("sou do get ", res.data);
        setUserLinks(res.data.shortenedUrls);
        visitcount = res.data.visitCount;
      })
      .catch((err) => console.log(err.response));
  }
  useEffect(() => getUrlByUser(), [geturl]);

  function postUrl() {
    const body = { url };
    axios
      .post(`${API_URL}/urls/shorten`, body, config)
      .then((res) => {
        console.log(res.data);
        setgeturl(!geturl);
      })
      .catch((err) => console.log(err.response));
  }
  function deleteUrl(id) {
    axios
      .delete(`${API_URL}/urls/${id}`, config)
      .then((res) => {
        console.log(res.data);
        setgeturl(!geturl);
      })
      .catch((err) => console.log(err.response));
  }
  function redirectToURL(shorturl) {
    // console.log("id", id)
    const httpNodeCors =  {
      origin: "*",
      methods: "GET,PUT,POST,DELETE"
    }
    axios
      .get(`${API_URL}/urls/open/${shorturl}`, httpNodeCors)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err.response));
  }
  return (
    <>
      <Header />
      <Style>
        <div className="top">
          <input
            type="text"
            placeholder="Links que cabem no bolso"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          ></input>
          <button onClick={() => postUrl()}> Encurtar Link</button>
        </div>
        <div className="body">
          {/* looping */}
          {userLinks.length > 0 ? (
            userLinks.map((link) => {
              return (
                <div className="link-line">
                  <div className="links">
                    <p id="original-link">{link.url}</p>
                    <p onClick={() => redirectToURL(link.shortUrl)}>
                      {link.shortUrl}
                    </p>
                    <p>Quantidade de visitas: {visitcount}</p>
                  </div>
                  <div className="trash">
                    {" "}
                    <img src={trash} onClick={() => deleteUrl(link.id)} />
                  </div>
                </div>
              );
            })
          ) : (
            <></>
          )}
        </div>
      </Style>
    </>
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
  margin-bottom: 60px;
  input {
    width: 100%;
    padding: 10px 10px;
    border: 1px solid rgba(120, 177, 89, 0.25);
    box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
    border-radius: 12px 12px;
  }

  .links {
    width: 100%;
    height: 50px;
    padding: 10px 10px;
    background-color: #80cc74;
    display: flex;
    flex-direction: row;
    color: #fff;
    border: 1px solid rgba(120, 177, 89, 0.25);
    box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
    border-radius: 12px 0 0 12px;
  }

  .links p {
    margin: 0 10px;
  }
  #original-link {
    overflow-x: hidden;
    width: 300px;
    overflow-y: hidden;
  }
  .top {
    display: flex;
    width: 100%;
    align-items: center;
    margin-top: 60px;

    button {
      width: 182px;
      height: 50px;
      background-color: #5d9040;
      border: none;
      margin-left: 20px;
      border: 1px solid rgba(120, 177, 89, 0.25);
      border-radius: 12px;
      color: #fff;
      font-weight: 700;
    }
  }
  .body {
    display: flex;
    margin-top: 60px;
    flex-direction: column;
  }
  .link-line {
    display: flex;
    margin: 10px 0;
  }
  .body img {
    width: 22px;
    height: 26px;
  }
  .trash {
    width: 130px;
    height: 50px;
    background-color: #fff;
    border: 1px solid rgba(120, 177, 89, 0.25);
    box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
    border-radius: 0 12px 12px 0;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;
