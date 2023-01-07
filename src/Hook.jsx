import React from "react";
import { useState } from "react";
const Hook=()=>{
const[Count,SetCount]=useState(0)
   return(
        <>
        <header>
            <nav className="navbar">
                <ul>
                 <li><a href="#">Home</a></li>
                 <li><a href="#">About</a></li>
                 <li><a href="#">Services</a></li>
                 <li><a href="#">Contact Us</a></li>
                 <div className="search">
                 <input type="text" name="search" id="search" placeholder="This is search"/>
                </div> 
                </ul>
            </nav>
        </header>
        <div className="container">
        <h1>${Count}</h1>
        <input type="button" value="Increase"  onClick={()=>SetCount(Count+1)}/>
        <input type="button" value="Decrease" onClick={()=>SetCount(Count-1)}/>
        <input type="button"  value="multiple"  onClick={()=>SetCount(Count*2)}/>
        <input type="button"  value="Divide"  onClick={()=>SetCount(Count/2)}/>
        </div>
        </>
    );  
};
export default Hook;