import React from "react";
import styled from "styled-components";
const InputStyle=()=>{
const Input=styled.input`
width: 100%;
padding: 12px 20px;
margin: 8px 0;
box-sizing: border-box;
`;
    return(
        <>
        {/* <Cusinput>text hear</Cusinput> */}
        <Input type={"text"} placeholder="enter your name"/>
      
        
        </>
    );
};
export default InputStyle;