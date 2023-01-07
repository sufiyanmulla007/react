import React from "react";
import styled from "styled-components";
const Div=()=>{
const NewDiv=styled.div`
border: 5px solid red;
text-align: center;
justify-content:center;
align-items: center;
`;
    return(
        <>
        <NewDiv>
        <h1>Tekisky</h1>
        </NewDiv>
        </>
    );
};
export default Div;