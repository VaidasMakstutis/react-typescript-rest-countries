import React from "react";
import { TCountry } from "../App";

interface IFilterProps {
  countries: TCountry[];
  areaRef: React.MutableRefObject<HTMLButtonElement | null>;
  regionRef: React.MutableRefObject<HTMLButtonElement | null>;
  activeButton: string;
  setActiveButton: React.Dispatch<React.SetStateAction<string>>;
  setShowCountries: React.Dispatch<React.SetStateAction<TCountry[]>>;
}

const Filter = ({ countries, areaRef, regionRef, activeButton, setActiveButton, setShowCountries }: IFilterProps) => {
  const findCountriesSmallerThanLtu = () => {
    const areaOfLithuania = 65300;
    setShowCountries(countries.filter(country => country.area < areaOfLithuania));
    setActiveButton(areaRef?.current?.id || "");
  };

  const findCountriesInOceania = () => {
    setShowCountries(countries.filter(country => country.region === "Oceania"));
    setActiveButton(regionRef?.current?.id || "");
  };

  return (
    <div className="filter-options">
      <label>Filter options:</label>
      <button ref={areaRef} id="filter-area" onClick={findCountriesSmallerThanLtu}>
        Countries are smaller than Lithuania
      </button>
      <button ref={regionRef} id="filter-region" onClick={findCountriesInOceania}>
        Countries are in Oceania
      </button>
    </div>
  );
};

export default Filter;
