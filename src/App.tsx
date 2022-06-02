import React, { useState, useEffect} from 'react';
import axios from "axios";
import '../src/css/index.scss';
import Countries from './Components/Countries';
import Sort from './Components/Sort';
import Filter from './Components/Filter';

export interface TCountry {
  name: string;
  region: string;
  area: number;
}

const App = () => {
  const [countries, setCountries] = useState<TCountry[]>([]);
  const [sortedCountries, setSortedCountries] = useState<TCountry[]>([]);
  const [countriesSmallerThanLtu, setCountriesSmallerThanLtu] = useState<TCountry[]>([]);
  const [countriesInOceania, setCountriesInOceania] = useState<TCountry[]>([]);
    
  useEffect(() => {
    axios.get(`https://restcountries.com/v2/all?fields=name,region,area`).then(res => {
      const data: TCountry[] = res.data;
      setCountries([...data]);
    });
  }, []);

  // console.log(countries);

  return (
    <div className="App">
       <section className="countries-header">
          <h2>Countries list</h2>
          <div className="sort-and-filter-wrapper">
              <div><Sort setSortedCountries={setSortedCountries} countries={countries}/></div>
              <div><Filter setCountriesSmallerThanLtu={setCountriesSmallerThanLtu} setCountriesInOceania={setCountriesInOceania} countries={countries} /></div>
          </div>
      </section>
       <Countries countries={
                              sortedCountries.length ? sortedCountries
                              : countriesSmallerThanLtu.length ? countriesSmallerThanLtu
                              : countriesInOceania.length ? countriesInOceania 
                              : countries
                            }
      />
    </div>
  );
};

export default App;