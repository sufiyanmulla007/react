import React from "react";
import styled from "styled-components";

const Button=()=>{
const Btn=styled.button`
background-color: #4CAF50;
border: none;
color: white;
padding: 15px 32px;
text-align: center;
text-decoration: none;
display: ;
position: absolute;
font-size: 16px;
display:inline-block;
justify-content:center;
align-items: center;
// height: 100vh;
padding: 35px 15px;
margin: 35px;
width:100%;
`;

    return(
        <>
        <div>
        <Btn>sumbit</Btn>
        </div>
        
        </>
    );
};
export default Button;