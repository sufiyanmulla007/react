import React from "react";
import { useState } from "react";
const Clock =()=>{
    const [Time,setTime]=useState();
        setInterval(()=>{
            let date=new Date()
            setTime(date.toLocaleTimeString())
        })
return (
    <>
        <div>
            <h1> Time is : {Time}</h1>
            </div>    
    </>
);
};
export default Clock;