import { Email, Password} from "@mui/icons-material";
import { Button, TextField } from "@mui/material";
import React from "react";
import { useState } from "react";
const Login = () => {
  const [Email,SetEmail]=useState ("");
  const[Password,SetPassword]=useState ("");
  return (
    <>
      <div className="contener">
        <form action="">
        <h2>Login</h2>
        <div>
          <TextField
            label="Email"
            type={Email}
            className="input"
            style={{ marginBottom: "1rem" }}
          onChange={e=>SetEmail(e.target.value)}
            
          />
        </div>
        <div>
          <TextField
            label="Password"
            type={Password}
            className="input"
            style={{ marginBottom: "1rem" }}
          onChange={e=>SetPassword(e.target.value)}
          />
        </div>
        <Button id="sub" >
          submit
        </Button>
        </form>
        </div>
    </>
  );
};

export default Login;
