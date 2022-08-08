import styled from "styled-components";

export default function Style({children}){
    return(<Container>{children}</Container>)
}


const Container = styled.div`
margin-top: 200px;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

button{
    width: 182px;
    height: 60px;
    background-color: #5d9040;
    border: none;
    margin-top : 20px ;
    border: 1px solid rgba(120, 177, 89, 0.25);
    border-radius: 12px;
    color: #fff;
    font-weight: 700;
}

.inputs{
display: flex;
width: 100%;
padding: 0 100px;
flex-direction: column;
 input{
    margin-top: 20px;
    width: 100%;
    height: 60px;
    border: 1px solid rgba(120, 177, 89, 0.25);
    border-radius: 12px;
    box-shadow: 0px 4px 24px rgba(120, 177, 89, 0.12);
    padding: 10px;
 }

}

`

