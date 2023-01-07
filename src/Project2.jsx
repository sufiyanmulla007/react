import React, { useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import axios from "axios";
import { Table, TableBody, TableCell, TableHead } from "@mui/material";
const Project2 = () => {
  const[Data,setData]=useState([]);
  const Api=()=>{
    axios
    .get('https://dummyjson.com/users')
    .then((res) => {
      setData(res.data.users)      
    console.log("then===>", res);
    })
    .catch((err) => {
    console.log("catch====>", err);
    });
  }
  useEffect(() => {
    Api();
  }, []);
  
  return (
    <>
    <div className="teable">
            <Table>
              <TableHead>
                <TableCell> User Id</TableCell>
                <TableCell> First Names</TableCell>
                <TableCell> Last Names</TableCell>
                <TableCell> User Email</TableCell>
              </TableHead>
        {Data.map((item,index)=>{
          return(
              <TableBody>
                <TableCell> {item.id}</TableCell>
                <TableCell> {item.firstName}</TableCell>
                <TableCell> {item.lastName}</TableCell>
                <TableCell> {item.email}</TableCell>
              </TableBody>
                )
              })}
            </Table>
       </div>
     
        
    </>
  );
};

export default Project2;
