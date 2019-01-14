import React from "react";
import "./style.css";

function Card(props) {
  return (
    <div className="card">
      <div className="img-container">
        <img alt={props.id} src={props.url} onClick={() => props.onClick(props.id)}/>
      </div>
    </div>
  );
}

export default Card;
