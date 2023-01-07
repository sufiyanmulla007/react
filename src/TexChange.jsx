import React, { useState } from "react";
// import TextBtn from "./TextBtn";
const TextChange=()=>{
const [MyName, SetMyName]=useState('Initial value');
    return(
        <>
        <div>
        <h1>{MyName}</h1>
        <button onClick={()=>{
            let value=MyName;
            (value ==="Inttal value")? SetMyName('change value'):SetMyName("Initial value")
        }}>chang</button>
        {/* <button onClick={()=>{
            SetMyName('change usestate value afer click')
        }}>
            change
        </button> */}
        </div>
        </>
    );
};
export default TextChange;