import React from "react";
const CoustumInput=({type,placeholder,onChange,...rest})=>{
    return(
        <>
    <div>
    <input type={type} placeholder={placeholder} onChange={onchange}{...rest} />
    </div>
       
        
        </>
    );
};
export default CoustumInput;