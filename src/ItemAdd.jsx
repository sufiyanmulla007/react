import React, { useState } from "react";
const ItemAdd=({list,setList})=>{
const [fname,setFname]=useState("");
const handlechang=(e,field)=>{
    switch(field){
    case "fristname":
        setFname(e.target.value)
    
    default:
    return field
    }
}
const handleAdd = ()=>{
    const obj = {
    fname:fname,
    }
    // const arr = [...list]
    // arr.push(obj)
    setList([...list,obj])
    setFname("")
    
}
    return(
        <>
        <div>
        <input type="text" name="fristname" placeholder="Enter Your tex" value={Fname}
        onChange={(e)=>handlechang(e,"fristname")}
       />
        <button onClick={()=>handleAdd()}>+</button>
        
        
        </div>
        
        
        </>
    );
};
export default ItemAdd;