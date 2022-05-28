import React from "react";
import { TCountry } from "../App";

const Countries = ({ countries }: {countries: TCountry[]}) => {
  
  return (
    <>
      <ul className="countries-list">
        {
        countries &&
          countries.map((country, i) => {
            return (
              <li className="countries-list-item" key={i}>
                <div className="countries-list-item-single">
                  <div>
                    <span>name: </span>
                    {country.name}
                  </div>
                  <div>
                    <span>region: </span>
                    {country.region}
                  </div>
                  <div>
                    <span>area: </span>
                    {country.area}
                  </div>
                </div>
              </li>
            );
          })
          }
      </ul>
    </>
  );
};

export default Countries;