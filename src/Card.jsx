import React from "react";
import img from "./component/dp.png"
const Card=()=>{
    return(
        <>
        <div>
        <h1>Welcome To React</h1>
        </div>
        <div className="input">
        <label htmlFor="" id="vt"><strong>Value</strong></label>  
        <input type="text"placeholder="Add Your Text" id="in" />
        <input type="button" id="btn" value="ADD" />
        </div>
        <div className="cardContainer">
        <div>
        <img src={img} alt="eror" />
        </div>
        <div>
        <h2>TEKISKY.PVT.LTD</h2>
        <input type="checkbox" name="I agree terms and condition" id="" /><br />
        <button>Edit</button>
        <button>Done</button>
        <button>Delete</button>
        </div>
        </div>
        </>
    );
};
export default Card;