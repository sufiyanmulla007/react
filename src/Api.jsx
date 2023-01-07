import React from "react";
const Api=()=>{
    const fristpromise=(status)=>{
    new Promise((resolve, reject) => {
        if(status){
            resolve("work is done");
        }else{
            reject("sorry try agin");
        }
    });
    };
    return(
        <>
        <div>
            <h1>promises</h1>
            <button onClick={()=>{
            fetch("https://reqres.in/api/users/2")
            .then((res)=> console.log(res))
            
            
            
            
            }}
            >
            call p</button>
        </div>
        </>
    );
};
export default Api;