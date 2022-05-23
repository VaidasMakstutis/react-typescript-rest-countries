import React, { useEffect, useState } from "react";
import axios from "axios";

export interface Country {
  name: string;
  region: string;
  area: number;
}

const FetchCountries = () => {
  const [countries, setCountries] = useState<Country[]>();

  useEffect(() => {
    axios
      .get(`https://restcountries.com/v2/all?fields=name,region,area`)
      .then(res => {
        const data: Country[] = res.data;
        console.log(res);
        setCountries([
          ...data
        ]);
      })
      .catch(error => {
        console.log("error:", error.message);
      });
  }, []);

  console.log('Rez:', countries);
  return <h3>Fetching data from API...</h3>;
};

export default FetchCountries;