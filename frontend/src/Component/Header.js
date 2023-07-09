import React from "react";
import hrclogo from "./hrclogo.svg";
import abclogo from "./abclogo.svg"
import whitespace from './whitespace.jpg'

function Header() {
  return (
    <>
    <div style={{ textAlign: "left" , marginBottom: "25px" , marginTop: "10px", paddingLeft: "10px"}}>
      <img src={abclogo} alt="ABC logo" />
      <img src={whitespace} alt="white" width="300px"/>
      <img src={hrclogo} alt="H2H logo1" />
    </div>
    <div style={{paddingLeft: "20px", color: "#db4437"}}>
       <h2>Invoice List</h2>
    </div>
    </>
  );
}

export default Header;
