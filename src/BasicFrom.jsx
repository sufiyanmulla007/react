import React, { useState } from "react";
import { useEffect } from "react";

const BasicFrom=()=>{
const intialvalues={username: "", email: "",Password: "",}
const [formvalue,setformvalue]=useState(intialvalues);
const[formErrors,setformErrors]=useState({});
const [isSubmit,SetisSubmit]=useState(false);
const handlechange=(e)=>{

const {name, value }=e.target;
console.log(name,value);
setformvalue({...formvalue,[name]: value});
};
const handleSubmit=(e)=>{
  e.preventDefault();
  // setformErrors(validate(formvalue));
  SetisSubmit(true);
};
useEffect(()=>{
 console.log(formErrors);
 if(Object.keys(formErrors).length === 0 && isSubmit){
    console.log(formvalue);
 }
},[formErrors]);
// const validate=(values)=>{
// const regex= "^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$";
// if(!values.username){
//   errors.username= "username is require!"
// }if(!values.email){
//     errors.email= "email is require!"
// }
// if(!values.Password){
//     errors.Password= "password is require!"
// }
// return errors;
// };
    return(
    <>
    <div className="contener">
    {/* <pre>{JSON.stringify(formvalue,undefined,2)}</pre> */}
    <h2>Login</h2>
    <form onSubmit={handleSubmit}>
    <div >
    <label>User Name</label><br />
    <input name="username" placeholder="enter Your user Name" id="user"
     value={formvalue.username}
     onChange={handlechange}
     />
    </div>
    <div>
    <label>Email</label><br />
    <input type="email" name="email" placeholder="Enter your email" 
    value={formvalue.email}
    onChange={handlechange}
    />
    </div>
    <div>
    <label>password</label><br />
    <input type="password" name="Password" placeholder="password" id="pass" 
    value={formvalue.Password} onChange={handlechange} />
    </div>
    <button id="sub">submit</button>
    </form>
   </div>
    
    </>
    );
};
export default BasicFrom;