import React from "react";
import { TCountry } from "../App";
import Loader from "./Loader";

interface ILoadingProps {
  countries: TCountry[];
  loading: boolean;
}

const Countries = ({ countries, loading }: ILoadingProps) => {
  if (loading) {
    return <Loader />;
  }

  return (
    <>
      <ul className="countries">
        {countries &&
          countries.map((country, i) => {
            return (
              <li className="countries-list" key={i}>
                <div className="countries-list-item">
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
          })}
      </ul>
    </>
  );
};

export default Countries;
