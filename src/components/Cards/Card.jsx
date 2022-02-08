import React from "react";
import './Card.css';

const Cards = (data) => { 
  const {title,value,colour} = data.data; 
  return (
    <div className="container">
      <h3 className="title">{title}</h3>
      <h2 className="num" style={{color:`${colour}`}} >{value}</h2>
    </div>
  );
};

export default Cards;
