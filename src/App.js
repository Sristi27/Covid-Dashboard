import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { CountryList } from "./components/Countries/CountryList";
import World from "./components/World/World";
import { fetchActive } from "./utils/api";
import { useEffect } from "react";
import Card from "./components/Cards/Card";
import Map from "./components/News/News";

function App() {
  
  return (
    <div className="App">
      <Navbar />
      <div style={{display:'flex'}}>
      {/* <div className="cards">
      {totalStat.map((data) => {
        return <Card data={data} key={data.title} />;
      })} */} 
      <World/>
      <Map/>
      <CountryList/>
      </div>
    </div>
  );
}

export default App;
