import "./TrafficLight.css"
import { useState, useEffect } from "react";

const TrafficLight = () => {

    const redStyle = {
        backgroundColor: "red",
        border: "3px solid #ac0a0a",
        width: "100px",
        height: "100px",
        borderRadius: "50%",
        display: "inline-block",
        margin: "3px",
        cursor: "pointer"
      };
      const yellowStyle = {
        backgroundColor: "yellow",
        border: "3px solid #dae508",
        width: "100px",
        height: "100px",
        borderRadius: "50%",
        display: "inline-block",
        margin: "3px",
        cursor: "pointer"
      };
      const greenStyle = {
        backgroundColor: "green",
        border: "3px solid #1f4606;",
        width: "100px",
        height: "100px",
        borderRadius: "50%",
        display: "inline-block",
        margin: "3px",
        cursor: "pointer"
      };
      const rdStyle = {
        backgroundColor: "red",
        width: "100px",
        height: "100px",
        borderRadius: "50%",
        boxShadow: "-2px -1px 100px 30px rgba(250, 228, 228, 0.75)",
        display: "inline-block",
        margin: "3px",
        cursor: "pointer"
    };
    const yellStyle = {
        backgroundColor: "yellow",
        width: "100px",
        height: "100px",
        borderRadius: "50%",
        boxShadow: "-2px -1px 100px 30px rgba(241, 242, 236, 0.75)",
        display: "inline-block",
        margin: "3px"
    };

      const [redColor, setRedColor] = useState(redStyle);
    //   const [yellowColor, setYellowColor] = useState(yellowStyle);


    return (
       <div className="container d-flex justify-content-center align-items-center">
        <div className="traffic-top"></div>
        <div className="traffic-container">
            <div 
            style = {redColor} 
            className="traffic-light red" 
            onClick={() => setRedColor(rdStyle)}>
            </div>
             <div 
             style = {yellowStyle}
             className="traffic-light yellow"
             onClick={() => setRedColor(yellStyle)}>
             </div>
            <div 
            style = {greenStyle}
            className="traffic-light green"
            onClick={ () => setColor(blueStyle)}>
            </div>
        </div>
       </div>
    );
};

export default TrafficLight;