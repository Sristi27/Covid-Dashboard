import React,{useState} from "react";
import "./news.css";

const Accordion = ({item}) => {
  const [isActive, setIsActive] = useState(false);
  return (
    <div className="accordion-item"> 
       <div id="news-heading">
                <div id="news-title">{item.title}</div>
                <div id="news-img">
                    <img src={item.image}/>
                    <button onClick={() => setIsActive(!isActive)}>{isActive ? "-" : "+"}</button>
                </div>
                 
        </div>  
      {isActive && <div className="news-content">
          
          {item.description}</div>}
    </div>
  );
};

export default Accordion;
