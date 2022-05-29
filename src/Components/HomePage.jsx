import React from "react";
import "./Styles/HomePage.css";


export default function HomePage() {

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
