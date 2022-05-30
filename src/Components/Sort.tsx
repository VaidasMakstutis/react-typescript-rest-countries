import React, { useState } from "react";
import { TCountry } from "../App";

interface ISortProps {
  countries: TCountry[];
  setSortedCountries: React.Dispatch<React.SetStateAction<TCountry[]>>;
}

const Sort = ({ countries, setSortedCountries }: ISortProps) => {
  const [sortDesc, setSortDesc] = useState(true);

  const sortHandler = () => {
    countries.sort((a, b) => {
      if (sortDesc) {
        if (a["name"] < b["name"]) {
          return 1;
        }
        return -1;
      }
      if (a["name"] > b["name"]) {
        return 1;
      }
      return -1;
    });
    setSortedCountries([...countries]);
    setSortDesc(!sortDesc);
  };

  return (
    <>
      <button type="button" onClick={sortHandler}>
        Sort by name {sortDesc ? "DESC" : "ASC"}
      </button>
    </>
  );
};

export default Sort;
