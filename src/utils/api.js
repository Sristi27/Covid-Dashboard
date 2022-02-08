import Axios from "axios";

const url = "https://covid19.mathdro.id/api";
const dailyurl = "https://covid19.mathdro.id/api/daily";

const mapurl = "https://covid19.mathdro.id/api/confirmed";
const countryurl = "https://covid19.mathdro.id/api/countries";

export const fetchActive = async () => {
  try {
    const data = await fetch(url, {
      mehtod: "GET",
    }).then((res) => res.json());
    return data;
  } catch (error) {
    return error;
  }
};



export const allCountries = async () => {
  try {
    const data = await fetch(countryurl, {
      mehtod: "GET",
    }).then((res) => res.json()); 
    return data.countries;
  } catch (error) {
    return error;
  }
};

export const countryWiseDetail = async (country) => {
  try {
    const data = await fetch(`${countryurl}/${country}`, {
      mehtod: "GET",
    }).then((res) => res.json()); 
    return data;
  } catch (error) {
    return error;
  }
};