import React, { useState, useEffect } from "react";
import { allCountries, countryWiseDetail } from "../../utils/api";
import "./country.css";

export const CountryList = () => {
  const [countryList, setCountryList] = useState([]);
  const [filteredCountryList, setFilteredCountryList] = useState([]);
  const [name, setName] = useState("");
  const searchForCountry = () => {};

  useEffect(() => {
    const fetchCountryList = async () => {
      const countries = await allCountries();
      countries.forEach(async (cntry) => {
        const data = await countryWiseDetail(cntry.name);
        if (data.confirmed) {
          const newCountry = {
            name: cntry.name,
            confirmed: data.confirmed.value,
            recovered: data.recovered.value,
            deaths: data.recovered.value,
          };
          setCountryList((countryList) => [...countryList, newCountry]);
          setFilteredCountryList((filteredCountryList) => [
            ...filteredCountryList,
            newCountry,
          ]);
        }
      });
    };
    fetchCountryList();
  }, []);

  useEffect(() => {
    console.log(name);
    const newCountryList = countryList.filter(
      (con) => con.name.toLowerCase().search(name.toLowerCase()) !== -1
    );
    setFilteredCountryList(newCountryList);
  }, [name]);

  return (
    <div className="country-container">
      <div id="search-bar">
        <input
          placeholder="Search for country"
          value={name}
          onChange={(e) => setName(e.target.value)}
        ></input>
      </div>
      <div id="countryDiv">
        <table>
          <thead>
            <tr>
              <td>Name</td>
              <td>Count</td>
            </tr>
          </thead>
          <div style={{ height: "2px" }} />
          <tbody>
            {filteredCountryList.map((item) => {
              return (
                <tr key={item.name} style={{ marginBottom: "40px" }}>
                  <td>{item.name}</td>
                  <td>{item.confirmed}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};
