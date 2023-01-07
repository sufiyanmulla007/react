import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
// import './component/Id.css';
// import img from "./component/dp.png";
import img from "./assets/dp.png";
const IdCard=(props)=>{
    return(
    <>
    <div className="cardcontainer">
    <div className="n">
    <img src={img} alt="eror" />
    {/* <div className="overlay">
    <div className="text">MOHAMMED SUFIYAN</div>
  </div> */}
    </div>
    <div>
    <h1>{props.FristName}</h1>
    <h2>{props.DOB}</h2>
    <h3>{props.gender}</h3>
    <h4>{props.designation}</h4>
    </div>
    <div className="cardcontainer2">
      <div className="Client"><h3>Our Clients</h3></div>
      <div className="icone">
      <FontAwesomeIcon icon="fa-brands fa-react" />
      <i className="fa-brands fa-twitter"></i>
      <i className="fa-brands fa-google"></i>
      <i className="fa-brands fa-paypal"></i>
      <i className="fa-brands fa-facebook"></i>
      <i className="fa-brands fa-apple"></i>
      {/* <FontAwesomeIcon icon="fa-brands fa-paypal" /> */}
      {/* <FontAwesomeIcon icon="fa-twitter" /> */}

      </div>
    <h3>www.Tekisky.pvt.ltd</h3>
    <p><strong>"TEKISKY"</strong>2th Floor,Workshopconer Road Nanded </p>
    <p>Ph: 9446062493 |{props.email}</p>
    </div>
    </div>
    </>
    );
};
export default IdCard;