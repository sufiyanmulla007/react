import React from "react";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import axios from "axios";
import { useState, useEffect } from "react";
const NewApi = () => {
  const [data, setData] = useState([]);
  const ApiData = () => {
    axios
      .get("https://dummyjson.com/products")
      .then((res) => {
        setData(res.data.products)
        console.log("then===>", res);
      })
      .catch((err) => {
        console.log("catch====>", err);
      });
  };
  useEffect(() => {
    ApiData();
  }, []);
  return (
    <>
      {data.map((item, index) => {
        return (
          <>
          <div key={index}>
            <h1> {item.id}</h1>
            <h1> {item.category}</h1>
            <h1> {item.discountPercentage}</h1>
            <h1> {item.stock}</h1>
            <h1> {item.rating}</h1>
            <h1>{item.title}{item.brand}</h1>
            <Card sx={{ maxWidth: 345 }}>
              <img src={item.images[0]}></img>
              <h2>{`$ ${item.price} `}</h2>
              <Typography variant="body2" color="text.secondary">
                {item.description}
              </Typography>
            </Card>
          </div>
          </>
        );
      })}
    </>
  );
};

export default NewApi;
