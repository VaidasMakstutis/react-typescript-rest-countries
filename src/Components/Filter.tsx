import React from "react";
import { TCountry } from "../App";

interface IFilterProps {
  countries: TCountry[];
  setCountriesSmallerThanLtu: React.Dispatch<React.SetStateAction<TCountry[]>>;
  setCountriesInOceania: React.Dispatch<React.SetStateAction<TCountry[]>>;
}

const Filter = ({ countries, setCountriesSmallerThanLtu, setCountriesInOceania }: IFilterProps) => {
  const findCountriesSmallerThanLtu = () => {
    const areaOfLithuania = 65300;
    setCountriesSmallerThanLtu(countries.filter(country => country.area < areaOfLithuania));
  };

  const findCountriesInOceania = () => {
    setCountriesInOceania(countries.filter(country => (country.region = "Oceania")));
  };

  return (
    <div className="filter-options">
      <label>Filter options:</label>
      <button onClick={findCountriesSmallerThanLtu}>Countries are smaller than Lithuania</button>
      <button onClick={findCountriesInOceania}>Countries are in Oceania</button>
    </div>
  );
};

export default Filter;