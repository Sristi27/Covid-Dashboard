import React,{useState,useEffect} from 'react';
import './world.css';   
import { fetchActive } from '../../utils/api';
import Cards from '../Cards/Card';

const World = () => {

  const [totalStat, setTotalStat] = useState([]);
  useEffect(() => {
    const fetchAPI = async () => {
      const data = await fetchActive();
      setTotalStat([
        {
          title: "Confirmed",
          value: data["confirmed"].value,
          colour: "blue",
        },
        {
          title: "Recovered",
          value: data["recovered"].value,
          colour: "green",
        },
        {
          title: "Deaths",
          value: data["deaths"].value,
          colour: "red",
        },
      ]);
    };

    fetchAPI();
  }, []);

  return (
  <div className="cards">
      {totalStat.map((data) => {
        return <Cards data={data} key={data.title} />;
      })}</div>
  )
};

export default World;
