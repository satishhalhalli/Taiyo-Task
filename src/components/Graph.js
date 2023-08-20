import React, { useEffect, useState } from "react";
import LineGraph from "./LineGraph";
import Map from "./Map";
import Header from "./Header";

const Graph = () => {
  const [cases, setCases] = useState();
  const [DeathCases, setDeathCases] = useState();
  const [recovered, setRecovered] = useState();
  const [countries, setCountries] = useState();
  const [mapCenter, setMapCenter] = useState();
  const [mapCountries, setMapCountries] = useState();
  useEffect(() => {
    getTotalData();
  }, []);
  const getTotalData = async () => {
    const res = await fetch("https://disease.sh/v3/covid-19/all");

    const data = await res.json();
    console.log(data);
    setCases(data.cases);
    setDeathCases(data.deaths);
    setRecovered(data.recovered);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://disease.sh/v3/covid-19/countries"
        );
        const data = await response.json();

        const formattedCountries = data.map((item) => ({
          name: item.country,
          value: item.countryInfo.iso2,
        }));

        setCountries(formattedCountries);
        setMapCountries(data);
        console.log("map", mapCountries);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Header title="Charts And Maps" />
      <div className="ml-52 w-5/6 mb-4">
        <h1 className="flex justify-center font-bold p-10 text-3xl">
          coivid cases info
        </h1>

        <div className="flex justify-center items-center space-x-10 mb-4">
          <div className="w-32 h-32 shadow-md flex flex-col justify-center items-center border border-gray-300">
            <h1 className="font-semibold">Total cases</h1>
            <h1 className="font-bold">{cases}</h1>
          </div>

          <div className="w-32 h-32 shadow-md flex flex-col justify-center items-center border border-gray-300">
            <h1 className="font-semibold">Death Cases</h1>
            <h1 className="font-bold">{DeathCases}</h1>
          </div>

          <div className="w-32 h-32 shadow-md flex flex-col justify-center items-center border border-gray-300">
            <h1 className="font-semibold">Recovered cases</h1>
            <h1 className="font-bold">{recovered}</h1>
          </div>
        </div>

        <LineGraph />

        <div className="mt-16">
          <Map />
        </div>
      </div>
    </>
  );
};

export default Graph;
