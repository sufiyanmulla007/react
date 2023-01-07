import React, { useState } from 'react'

const NewReg = () => {
 const[fristName,setFristName]=useState("");
 const[lastName,setLastName]=useState("");
 const[email,setEmail]=useState=("");
 const[password,setPassword]=useState("");
console.log("fristname=======>",fristName);
console.log("lname====>",lastName);
console.log("e===>",email);
console.log("pass====>",password);

  return (
    <>
    <div>
      <input type="text" name='fristname' value={fristName}
      onChange={(e)=>setFristName(e.target.value)}/><br />
    </div>
    <div>
    <input type="text"name='lastname'value={lastName}
    onChange={(e)=>setLastName(e.target.value)} />
    </div>
    <div>
    <input type="email" name='email' value={email}
    onChange={(e)=>setEmail(e.target.value)}/>
    </div>
    <div>
      <input type="text" name='password' value={password} 
      onChange={(e)=>setPassword(e.target.value)}
      />
    </div>
 
    </>
  )
}

export default NewReg
