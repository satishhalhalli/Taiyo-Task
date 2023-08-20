import React from "react";
// import numeral from "numeral";
import { Circle, Popup } from "react-leaflet";

const casesTypeColors = {
  cases: {
    hex: "#CC1034",
    multiplier: 300,
  },
  recovered: {
    hex: "#7dd71d",
    multiplier: 1200,
  },
  deaths: {
    hex: "#fb4443",
    multiplier: 2000,
  },
};

export const showDataOnMap = (data, casesType = "cases") =>
  data.map((country) => (
    <Circle
      center={[country.countryInfo.lat, country.countryInfo.long]}
      color={casesTypeColors[casesType].hex}
      fillColor={casesTypeColors[casesType].hex}
      fillOpacity={0.4}
      radius={
        (Math.sqrt(country[casesType]) *
          casesTypeColors[casesType].multiplier) /
        2
      }
      // redius={1000000000}
    >
      <Popup>
        <div className="flex flex-col items-center">
          <h1>pop</h1>
          <div
            className="w-8 h-5 bg-center bg-no-repeat bg-cover"
            style={{ backgroundImage: `url(${country.countryInfo.flag})` }}
          ></div>
          <div className="text-lg font-semibold">{country.country}</div>
          <div className="text-sm">Cases:{country.cases}</div>
          <div className="text-sm">Recovered:{country.recovered}</div>
          <div className="text-sm">Deaths:{country.deaths};</div>
        </div>
      </Popup>
    </Circle>
  ));
