import React from "react";
import "./Styles/HomePage.css";
import GenerateRandomColor from "./Usecolorgenerate";

export default function HomePage() {
  const { color, generateColor } = GenerateRandomColor();

  return (
    <div className="main-container">
      <div className="left-div"></div>
      <div className="circles">
          <div>"#"{color}</div>
          <div>"#"{color}</div>
          <div>"#"{color}</div>
          <div>"#"{color}</div>
          <div>"#"{color}</div>
      </div>
      <div className="left-div-container">
          <input className="btn" type="number" placeholder="Enter number" />
          <button className="btn" onClick={generateColor} >Shoot</button>
      </div>
    </div>

   
  );
}
