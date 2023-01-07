import { Button } from "@mui/material";
import React from "react";
import img from "./component/dp.png"
const ListAdd=()=>{
    return(
        <>
        <Button variant="text">Home</Button>
<Button variant="contained">About</Button>
<Button variant="outlined">Help</Button>
        <div>
        <h1 style={{textAlign:"center",color:"black", fontFamily:"bold"}}>Welcome To React</h1>
        </div>
        <div className="cardContainer"style={{border:"1px solid black",width:"450px",height:"auto",textAlign:"center",backgroundColor:"bisque"}}>
        <h2 style={{fontFamily:"bold",}}>TEKISKY.PVT.LTD </h2>
        <div>
        <img src={img} alt="img not load" style={{borderRadius:"50px",width:"30%",height:"50%",padding:"12px"}}/>
        </div>
        <button style={{padding:"10px 37px",fontSize:"18px",backgroundColor:"whitesmoke",margin:"10px"}}>Edit</button>
        <button style={{padding:"10px 37px",fontSize:"18px",backgroundColor:"whitesmoke", margin:"10px"}}>Done</button>
        <button style={{padding:"10px 37px",fontSize:"18px",backgroundColor:"whitesmoke" ,margin:"10px"}}>Delete</button>
       </div>
       

        </>
        
    );
};
export default ListAdd;