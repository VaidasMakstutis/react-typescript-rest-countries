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
    axios.get(`https://restcountries.com/v2/all?fields=name,region,area`).then(res => {
      const data: Country[] = res.data;
      setCountries([...data]);
    });
  }, []);

  console.log(countries);

  return (
    <>
      <h2>Countries list:</h2>
      <ul className="countries-list">
        {countries &&
          countries.map((element: any, i: number) => {
            return (
              <li className="countries-list-item" key={i}>
                <div>
                  <span>name: </span>
                  {element.name}
                </div>
                <div>
                  <span>region: </span>
                  {element.region}
                </div>
                <div>
                  <span>area: </span>
                  {element.area}
                </div>
              </li>
            );
          })}
      </ul>
    </>
  );
};

export default FetchCountries;
