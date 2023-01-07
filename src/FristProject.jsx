import {
    Avatar,
    ListItem,
    ListItemAvatar,
    ListItemText,
    TextField,
  } from "@mui/material";
  import React, { useEffect, useState } from "react";
  import axios from "axios";
  
  const FristProject = () => {
    const [data, setData] = useState([]);
    const [masterData, setMasterData] = useState([]);
  
    useEffect(() => {
      getApiData();
    }, []);
  
    const getApiData = () => {
      axios
        .get("https://www.breakingbadapi.com/api/characters")
        .then((res) => {
          setData(res.data);
          setMasterData(res.data);
        })
        .catch((err) => console.log(err));
    };
  
    const handleSearch = (text) => {
      if (text.trim() !== "") {
        var tempArr = masterData.filter(
          (item) =>
            item.name.toLowerCase().includes(text.trim().toLowerCase()) ||
            item.portrayed.toLowerCase().includes(text.trim().toLowerCase())
        );
        setData(tempArr);
      }
    };
  
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          padding: 30,
        }}
      >
        <div style={{ width: "50%" }}>
          <TextField
            label="Search Characters"
            fullWidth
            onChange={(e) => handleSearch(e.target.value)}
          />
          {data.map((item, index) => (
            <ListItem
              key={index}
              style={{ backgroundColor: "white", marginTop: 10, borderRadius: 5 }}
            >
              <ListItemAvatar>
                <Avatar src={item.img} />
              </ListItemAvatar>
              <ListItemText primary={item.name} secondary={item.portrayed} />
            </ListItem>
          ))}
        </div>
      </div>
    );
  };
  
  export default FristProject;