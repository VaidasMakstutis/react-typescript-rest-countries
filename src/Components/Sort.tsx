import React, { useState } from "react";
import { TCountry } from "./FetchCountries";

export interface ISortProps {
  countries: TCountry[];
}

const Sort = ({ countries: ISortProps }: { countries: any }) => {
  const [sortByName, setSortByName] = useState<TCountry[]>();

  const sortDesc = () => {
    const sortedCountries: [] = ISortProps; // New array for sort
    sortedCountries.sort((a, b) => 
      a['name'] > b['name'] ? -1 : 1,
    );
    setSortByName([...sortedCountries]);
  };
  
  console.log("Sorted by name:", sortByName);
  return <button onClick={sortDesc}>Sort by name ↓ ↑</button>;
};

export default Sort;