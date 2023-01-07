import react, { useState } from "react"
const Toodo=()=>{
    const [fName , setFname] = useState('')
    const[lName,setlName]=useState("");
    const[salary,setSalary]=useState("");
    const[post ,setPost]=useState("");
    

    const handleChange1  = (e)=>{
        setFname(e.target.value)
        
    }
    const handleChange2=(e)=>{
        setlName(e.target.value)
    }
    const handleChange3=(e)=>{
        setSalary(e.target.value)
    }
    const handleChange4=(e)=>{
        setPost(e.target.value)
    }

    const handelAAD=()=>{
       setFname(fName)
       setlName(lName)
       setSalary(salary)
       setPost(post)
       console.log(fName);
       console.log(lName);
       console.log(salary);
       console.log(post)
        setFname("")
        setlName("")
        setSalary("")
        setPost("")
        
    }
    
    return(
        <>
        <input type="text" name="fname" value={fName} onChange={(e)=>handleChange1(e)} />
        <input name='lName' value={lName} onChange={(e)=>handleChange2(e)} type="text" /> <br />
        <input type="text" name="salary" value={salary} onChange={(e)=>handleChange3(e)}/>
        <input type="text" name="post" value={post} onChange={(e)=>handleChange4(e)}/>
        <button onClick={handelAAD}> ADD </button>
        </>
    )
}
export default Toodo;