import React from "react";


const COLOR = {
    red: "btn-color-red",
    green: "btn-color-green",
    yellow: "btn-color-yellow",
    purple: "btn-color-purple"

}
export const TrafficLight = (props) => {
    
    return (
        <div className="light-container">
            <button className={`btn-shape ${COLOR[props.color]}`} onClick={props.onClick}></button>
            <div className={`brightness-filter ${COLOR[props.color]} ${props.activeGlow ? "glow" : ""}`}></div>
        </div>
    );
};