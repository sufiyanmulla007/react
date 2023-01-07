import axios from "axios";
import React from "react";
import { useState } from "react";
const CardApi=()=>{
const [Data, setData]=useState([]);
const handleDelete=(index)=>{
    Data.splice(index,1);
}
setData((prevstate)=>[...Data])
const handleAllDelete=()=>{
    setData(()=>[]);
}
const handleGetAll=()=>{
    axios.get('https://reqres.in/api/users')
    .then((res)=>{
    setData(res.Data.Data)
    })
}
    return (
        <>
        <button>Get Data</button>
        <button>All Delete</button>
       <div className="Card">
        {Data.map((res,index)=>(
        <div className="Proflie">
        <button onClick={()=>handleDelet(index)}>Delete</button>
        <div className="img">
            <img src={res.avatar} alt="" />
        </div>
        <div>
            <h3>{res.frist_name} {res.last_name}</h3>
            <h4>{res.email}</h4>
            <h5>more Details:</h5>
            <p> i am{res.frist_name}{res.last_name}</p>
        </div>
        </div>
        ))};

       </div>
        </>
    );
};
export default CardApi;