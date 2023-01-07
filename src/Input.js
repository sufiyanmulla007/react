import React from 'react'
import CoustumInput from './CoustumInput'
import "./Input.css";
// import Input from "./Input";
const Input = () => {
  return (
    <div>
       <CoustumInput
          type={"text"}
          placeholder="Enter your f name"
          onChange={(event) => console.log(event.target.value)}
        />
         <CoustumInput
          type={"number"}
          placeholder="number"
          onChange={(event) => console.log(event.target.value)}
        />
    </div>
  )
}

export default Input
