import logo from "./logo.svg";
import "./App.css";
// import "./ItemAdd.css";
import FristProject from "./FristProject";
// import { Switch } from "@mui/material";
import { BrowserRouter, Switch,Link, NavLink } from "react-router-dom";
import { Route } from "@mui/icons-material";
import Home from "./Home";
import Project2 from "./Project2";
import NewApi from "./NewApi";
// import Registration from "./Registration";
// import "./Registration.css";
import NewReg from "./NewReg";
import Toodo from "./toodo";
// import Logout from "./Logout";
// import Login from "./Login";
// import Div from "./Div";
// import Button from "./Button";
// import Tex from "./Tex";
// import CardApi from "./CardApi";
// import TextChange from "./TexChange";
// import TextBtn from "./TextBtn";
//import FristComponent from './component/FristComponent';
//import Second from './component/SecondCo';
// import FourthComponent from './component/FourthComponent';
// import './id.css';
// import IdCard from './IdCard';
// import CoustumInput from "./CoustumInput";
// import "./Input.css";
// import Input from "./Input";
// import Card from "./Card";
// import './Card.css';
// import Hook from "./Hook";
// import './Hook.css';
// import ItemAdd from "./ItemAdd";
// import Clock from "./Clock";
// import ListAdd from "./ListAdd";
// import Api from "./Api";
// import BasicFrom from "./BasicFrom";
// import "./From.css";
// import InputStyle from "./InputStyle";
// import "./Login.css";



function App() {
  return (

<>
    {/* <NavLink to='/'> Home </NavLink>
      <NavLink to='/FristProject'> FristProject </NavLink>
      <NavLink to='/Logout'> Logout </NavLink>
      
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/FristProject' component={FristProject}/>
        <Route exact path='/Logout' component={Logout}/>
      </Switch> */}

    <div className="App">
      <header className="App-header">

      
        {/* <FristComponent/> */}
        {/* <Second/> */}
        {/* <FourthComponent/> */}
        {/* <IdCard 
       FristName=" Name: Mohammed Sufiyan"
       DOB=" DOB: 30-11-1995"
       gender="Gender: M"
       designation="Designation: Software Engineer"
       ph
       email=" Email:info@tekisky.info"
      /><br></br> */}
      {/* <IdCard
       FristName=" Name: Syed Sohle"
       DOB=" DOB: 23-05-1998"
       gender="Gender: M"
       designation="Designation: Software Engineer"
       ph
       email=" Email:info@tekisky.info"
       /> */}
        {/* <CoustumInput
          type={"text"}
          placeholder="Enter your f name"
          onChange={(event) => console.log(event.target.value)}
        />
        
        <CoustumInput
          type={"password"}
          placeholder="Password"
          onChange={(event) => console.log(event.target.value)}
          />
          
          <CoustumInput
          type={"number"}
          placeholder="Number"
          onChange={(event) => console.log(event.target.value)}
          />
        <Input/> */}
        {/* <Card/>
        <Clock/> */}
        {/* <Hook/> */}
        {/* <ListAdd/> */}
        {/* <TextChange/> */}
        {/* <TextBtn/> */}
        {/* <Api/> */}
     {/* <BasicFrom/> */}
     {/* <CardApi/> */}
     {/* <Tex/> */}
     {/* <InputStyle/> */}
     {/* <Button/> */}
      {/* <Div/> */}
      {/* <FristProject/> */}
      {/* <Login /> */}
      {/* <ItemAdd list={list} setList={setList} /> */}
      {/* <NewApi/> */}
      {/* <Project2/> */}
      {/* <Registration/> */}
      {/* <NewReg/> */}
      <Toodo/>
      </header>
    </div>
        </>
  );
}

export default App;
