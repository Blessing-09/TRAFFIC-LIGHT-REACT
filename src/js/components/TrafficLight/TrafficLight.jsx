import "./TrafficLight.css";
import React, { useState, useEffect } from "react";

const TrafficLight = () => {
  // current traffic lights as a function with a given parameter
  const currentTraffic = (color) => ({
    backgroundColor: color,
    border: "3px solid ${color}",
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    display: "inline-block",
    margin: "3px",
    cursor: "pointer",
  });
  // This function allow us to change the state of the traffic color
  const activeTraffic = (color) => ({
    backgroundColor: color,
    width: "100px",
    height: "100px",
    borderRadius: "50%",
    boxShadow: "-2px -1px 100px 30px rgba(253, 248, 216, 0.75)",
    margin: "3px",
  });

  const [activeLight, setActiveLight] = useState({
    red: currentTraffic("red"),
    yellow: currentTraffic("yellow"),
    green: currentTraffic("green"),
  });
  const [activeLightColor, setActiveLightColor] = useState("green");
  const [running, setRunning] = useState(false);

  //  This function allows us toggle between each traffic light when clicked
  const activeColorChange = (color) => {
    setActiveLight(() => ({
      red: color === "red" ? activeTraffic("red") : currentTraffic("red"),
      yellow:
        color === "yellow" ? activeTraffic("yellow") : currentTraffic("yellow"),
      green:
        color === "green" ? activeTraffic("green") : currentTraffic("green"),
    }));
  };

  const atInterval = () => {
    if (running) return;
    setRunning(true);

    let color = activeLightColor;

    const intervalId = setInterval(() => {
      switch (color) {
        case "red":
          color = "yellow";
          break;
        case "yellow":
          color = "green";
          break;
        case "green":
          color = "red";
          break;
        default:
          color = "red";
      }
      setActiveLightColor(activeColorChange(color));
    }, 2000);

    const stop = () => {clearInterval(intervalId);
    setRunning(false);
   
    };
    
    return stop;
    
  };


  return (
    <div className="container d-flex justify-content-center align-items-center">
      <div className="traffic-top"></div>
      <div className="traffic-container">
        <div
        data-bs-toggle="tooltip" data-bs-placement="bottom" title="Click to display"
          style={activeLight.red}
          className="traffic-light red"
          onClick={() => activeColorChange("red")}
        ></div>
        <div
        data-bs-toggle="tooltip" data-bs-placement="bottom" title="Click to display"
          style={activeLight.yellow}
          className="traffic-light yellow"
          onClick={() => activeColorChange("yellow")}
        ></div>
        <div
        data-bs-toggle="tooltip" data-bs-placement="bottom" title="Click to display"
          style={activeLight.green}
          className="traffic-light green"
          onClick={() => activeColorChange("green")}
        ></div>
      </div>
      <button 
      data-bs-toggle="tooltip" data-bs-placement="bottom" title="Click to toggle"
      className="btn btn-primary" onClick={() => atInterval()}>
        CHANGE LIGHTS!
      </button>
      <button onClick={() => {stop}} className="btn btn-danger">STOP</button>
    </div>
  );
};

export default TrafficLight;
