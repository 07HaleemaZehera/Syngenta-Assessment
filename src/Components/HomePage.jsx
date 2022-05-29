import React, { useState } from "react";
import "./Styles/HomePage.css";
import { AllColorsData } from "./AllColors";

export default function HomePage() {
  const[color,setColor]=useState(AllColorsData)

  const handleShoot=(id)=>{
    const colorChange=color.map((e)=>{
      return e._id==id ? {...e,status:!e.status} : e
    })
    setColor(colorChange)
    console.log("ShowData",AllColorsData)
  }

  return (
    <div className="main-container">
      <div className="left-div">Empty Div</div>
      <div className="circles">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
      </div>
      <div className="left-div-container">
          <input className="btn" type="number" placeholder="Enter number" />
          <button className="btn" onClick={()=>handleShoot()} >Shoot</button>
      </div>
    </div>

   
  );
}
