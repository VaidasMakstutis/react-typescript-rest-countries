import React from "react";
import { TCountry } from "../App";

interface IFilterProps {
  countries: TCountry[];
  countriesSmallerThanLtu: TCountry[];
  setCountriesSmallerThanLtu: React.Dispatch<React.SetStateAction<TCountry[]>>;
}

const Filter = ({ countries, countriesSmallerThanLtu, setCountriesSmallerThanLtu }: IFilterProps) => {
  
  const findCountriesSmallerThanLtu = () => {
    const areaOfLithuania = 65300;

    for (let i = 0; i < countries.length; i++) {
      if (countries[i].area < areaOfLithuania) {
        countriesSmallerThanLtu.push(countries[i]);
      }
    }
    setCountriesSmallerThanLtu([...countriesSmallerThanLtu]);
    // console.log("Countries smaller than Ltu:", countriesSmallerThanLtu);
  };

  return (
    <div className="filter-options">
      <label>Filter options:</label>
      <button onClick={findCountriesSmallerThanLtu}>Countries are smaller than Lithuania</button>
      <button>Countries are in Oceania</button>
    </div>
  );
};

export default Filter;