import React, { useState } from "react";
import { useEffect } from "react";
import Accordion from "./Accordion";
import "./news.css";

const News = () => {
  const api = "ea076b875680a9b22cd5ddcfad687db0";
  const param = "Covid OR Corona";
  const [articles, setArticles] = useState("");
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    fetch(`https://gnews.io/api/v4/search?q=${param}&lang=en&token=${api}`, {
      method: "GET",
    })
      .then((data) => data.json())
      .then((res) => 
      {
        console.log(res.articles);
        setArticles(res.articles);
      });
  }, []);

  return (
    <div className="news-container">
      <div id="news-block">
        {articles && articles.map((item) => {
          return (
            <Accordion item={item}/> 
          );
        })}
      </div>
    </div>
  );
};

export default News;
