import React from "react";
const FourthComponent=()=>{
    let obj={
        Fname:"mohammed",
        Lastname:"sufiyan",
    };
    return(
        <>
        <div className="first">
        <h1>First Name : {obj.Fname}</h1>
        <h1>Lastname :{obj.Lastname}</h1>
        </div>
        </>
    );
};
export default FourthComponent;


