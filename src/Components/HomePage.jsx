import React, { useState } from "react";
import "./Styles/HomePage.css";
import { AllColorsData } from "./AllColors";

export default function HomePage() {
  const[color,setColor]=useState(AllColorsData)

  return (
    <div className="main-container">
      <div className="left-div"></div>
      <div className="circles">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
      </div>
      <div className="left-div-container">
          <input className="btn" type="number" placeholder="Enter number" />
          <button className="btn" onClick >Shoot</button>
      </div>
    </div>

   
  );
}
