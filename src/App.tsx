import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import Countries from "./Components/Countries";
import Sort from "./Components/Sort";
import Filter from "./Components/Filter";

export interface TCountry {
  name: string;
  region: string;
  area: number;
}

const App = () => {
  const [countries, setCountries] = useState<TCountry[]>([]);
  const [showCountries, setShowCountries] = useState<TCountry[]>([]);
  const [activeButton, setActiveButton] = useState("");

  const sortRef = useRef<HTMLButtonElement | null>(null);
  const areaRef = useRef<HTMLButtonElement | null>(null);
  const regionRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    axios.get(`https://restcountries.com/v2/all?fields=name,region,area`).then(res => {
      const data: TCountry[] = res.data;
      setCountries([...data]);
    });
  }, []);

  useEffect(() => {
    if (sortRef.current) {
      sortRef.current.className = sortRef.current.id === activeButton ? "active" : "";
    }
    if (areaRef.current) {
      areaRef.current.className = areaRef.current.id === activeButton ? "active" : "";
    }
    if (regionRef.current) {
      regionRef.current.className = regionRef.current.id === activeButton ? "active" : "";
    }
  }, [activeButton]);

  return (
    <div className="App">
      <section className="countries-header">
        <h2>Countries list</h2>
        <div className="sort-and-filter-wrapper">
          <div>
            <Sort
              sortRef={sortRef}
              setShowCountries={setShowCountries}
              countries={countries}
              activeButton={activeButton}
              setActiveButton={setActiveButton}
            />
          </div>
          <div>
            <Filter
              areaRef={areaRef}
              regionRef={regionRef}
              setShowCountries={setShowCountries}
              countries={countries}
              activeButton={activeButton}
              setActiveButton={setActiveButton}
            />
          </div>
        </div>
      </section>
      <Countries countries={showCountries.length ? showCountries : countries} />
    </div>
  );
};

export default App;
