import "./TrafficLight.css";
import React, { useState, useEffect, useRef } from "react";

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
    filter: "drop-shadow(0 0 10px rgba(126, 122, 122, 0.9))",
  });

  const [activeLight, setActiveLight] = useState({
    red: currentTraffic("red"),
    yellow: currentTraffic("yellow"),
    green: currentTraffic("green"),
  });
  const [activeLightColor, setActiveLightColor] = useState("");
  const [running, setRunning] = useState(false);
  const intervalId = useRef(null);
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

  const runInterval = () => {
    if (running) return;
    setRunning(true);

    let color = activeLightColor;

    intervalId.current = setInterval(() => {
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

    return () => clearInterval(intervalId);
  };

  function stopInterval() {
    setRunning(false);
    clearInterval(intervalId.current);
    // reset to original states
    setActiveLight({
      red: currentTraffic("red"),
      yellow: currentTraffic("yellow"),
      green: currentTraffic("green"),
    });
    setActiveLightColor("");
  }

  return (
    <div className="container d-flex justify-content-center align-items-center">
      <div className="traffic-top"></div>
      <div className="traffic-container">
        <div
          data-bs-toggle="tooltip"
          data-bs-placement="bottom"
          title="Click to display"
          style={activeLight.red}
          className="traffic-light red"
          onClick={() => activeColorChange("red")}
        ></div>
        <div
          data-bs-toggle="tooltip"
          data-bs-placement="bottom"
          title="Click to display"
          style={activeLight.yellow}
          className="traffic-light yellow"
          onClick={() => activeColorChange("yellow")}
        ></div>
        <div
          data-bs-toggle="tooltip"
          data-bs-placement="bottom"
          title="Click to display"
          style={activeLight.green}
          className="traffic-light green"
          onClick={() => activeColorChange("green")}
        ></div>
      </div>

      <div className="button-container d-flex flex-column justify-content-center ms-3 gap-3">
        <button
          data-bs-toggle="tooltip"
          data-bs-placement="bottom"
          title="Click to toggle"
          className="btn btn-primary"
          onClick={() => runInterval()}
        >
          TOGGLE
        </button>
        <button onClick={() => stopInterval()} className="btn btn-danger">
          STOP
        </button>
      </div>
    </div>
  );
};

export default TrafficLight;
