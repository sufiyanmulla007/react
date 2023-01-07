import React from "react";
import { useState } from "react";
const TextBtn=()=>{
const [Tex, SetTex]=useState("text value change");
const Texchange=()=>{
    SetTex('change btn value')
}
 return(
    <>
    <div>
        <button onClick={texChange}>onclick</button>
        <h1>{Tex}</h1>
    </div>
    </>
 );
};
export default TextBtn;