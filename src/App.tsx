import React, { useState, useEffect} from 'react';
import axios from "axios";
import '../src/css/index.scss';
import Countries from './Components/Countries';
import Sort from './Components/Sort';

export interface TCountry {
  name: string;
  region: string;
  area: number;
}

const App = () => {
  const [countries, setCountries] = useState<TCountry[]>([]);
  const [sortedCountries, setSortedCountries] = useState<TCountry[]>([]);
    
  useEffect(() => {
    axios.get(`https://restcountries.com/v2/all?fields=name,region,area`).then(res => {
      const data: TCountry[] = res.data;
      setCountries([...data]);
    });
  }, []);

  // console.log("Fetch data:", countries);

  return (
    <div className="App">
       <section className="countries-header">
          <h2>Countries list</h2>
          <div className="sort-and-filter-wrapper">
              <div className="sort"><Sort setSortedCountries={setSortedCountries} countries={countries}/></div>
          </div>
      </section>
      <Countries countries={sortedCountries.length ? sortedCountries : countries} />
    </div>
  );
};

export default App;