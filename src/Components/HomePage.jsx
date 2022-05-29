import React, { useState } from "react";
import "./Styles/HomePage.css";
import InputData from "./InputData";

const AllColorsData = [
  {
    _id: 1,
    circle_color: "#f95959",
    status: false,
  },
  {
    _id: 2,
    circle_color: "#00bbf0",
    status: false,
  },
  {
    _id: 3,
    circle_color: "#680747",
    status: false,
  },
  {
    _id: 4,
    circle_color: "#bae8e8",
    status: false,
  },
  {
    _id: 5,
    circle_color: "#f1b963",
    status: false,
  },
];

export default function HomePage() {
  const [color, setColor] = useState(AllColorsData);

  const handleShoot = (id) => {
    const colorChange = color.map((e) => {
      return e._id == id ? { ...e, status: !e.status } : e;
    });
    setColor(colorChange);
    console.log("ShowData", AllColorsData);
  };

  return (
    <div className="main-container">
      
      <div className="MainDiv">
        <p>empty div</p>
        {color.map((ele) =>
          ele.status ? (
            <div
              key={ele.id}
              className="ColorcircleDv"
              style={{ backgroundColor: `${ele.circle_color}` }}
            >
              {ele.id}
            </div>
          ) : null
        )}
      </div>
      <div className="ColorcircleMainDv">
       
        {color.map((e) =>
          e.status ? null : (
            <div
              key={e.id}
              className="ColorcircleDv"
              style={{ backgroundColor: `${e.circle_color}` }}
            >
            </div>
          )
        )}
      </div>
      <InputData handleShoot={handleShoot} />

    </div>
  );
}
