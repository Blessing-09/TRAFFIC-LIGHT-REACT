import "./TrafficLight.css";
import React, { useState, useEffect } from "react";

const TrafficLight = () => {
  // const redTraffic = {
  //   backgroundColor: "red",
  //   border: "3px solid #ac0a0a",
  //   width: "100px",
  //   height: "100px",
  //   borderRadius: "50%",
  //   display: "inline-block",
  //   margin: "3px",
  //   cursor: "pointer",
  // };
  // const yellowTraffic = {
  //   backgroundColor: "yellow",
  //   border: "3px solid #dae508",
  //   width: "100px",
  //   height: "100px",
  //   borderRadius: "50%",
  //   display: "inline-block",
  //   margin: "3px",
  //   cursor: "pointer",
  // };
  //   const greenTraffic = {
  //     backgroundColor: "green",
  //     border: "3px solidrgb(70, 67, 6);",
  //     width: "100px",
  //     height: "100px",
  //     borderRadius: "50%",
  //     display: "inline-block",
  //     margin: "3px",
  //     cursor: "pointer"
  //   };
  // Used this function to simplify the current traffic color characteristics
  const currentTraffic = color => ({
    backgroundColor: color,
    border: "3px solid ${color}",
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    display: "inline-block",
    margin: "3px",
    cursor: "pointer"
  });
  // This function allow us to change the state of the traffic color
  const activeTraffic = (color) =>({
    backgroundColor: color,
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    boxShadow: "-2px -1px 100px 30px rgba(253, 248, 216, 0.75)",
    margin: "3px"
  });

  const [activeLight, setActiveLight] = useState({
    red: currentTraffic("red"),
    yellow: currentTraffic("yellow"),
    green: currentTraffic("green") ,
  }
  );
//  This function allows us toggle between each traffic light
  let  activeColorChange = (color) => {
    setActiveLight( () => ({
     red: color === "red" ? activeTraffic("red") : currentTraffic("red"),
     yellow: color === "yellow" ? activeTraffic("yellow") : currentTraffic("yellow"),
     green: color === "green" ? activeTraffic("green") : currentTraffic("green"),
    }));
  };
 

  return (
    <div className="container d-flex justify-content-center align-items-center">
      <div className="traffic-top"></div>
      <div className="traffic-container">
        <div
          style={activeLight.red}
          className="traffic-light red"
          onClick={() => activeColorChange("red")
        }
        ></div>
        <div
          style={activeLight.yellow}
          className="traffic-light yellow"
          onClick={() => activeColorChange("yellow")
        }
        ></div>
        <div
          style={activeLight.green}
          className="traffic-light green"
          onClick={() => activeColorChange("green")
          }
        ></div>

      </div>
      <button className="btn btn-primary">CHANGE LIGHTS!</button>
    </div>
  );
};

export default TrafficLight;
