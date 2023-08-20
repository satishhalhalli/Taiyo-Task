import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { useState, useEffect } from "react";
import { showDataOnMap } from "./ShowDataOnMap";

const Map = () => {
  const [mapCountries, setMapCountries] = useState([]);
  const [mapCenter, setMapCenter] = useState({ lat: 34.80746, lng: -40.4796 });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://disease.sh/v3/covid-19/countries"
        );
        const data = await response.json();
        setMapCountries(data);
        setMapCenter([data.countryInfo.lat, data.countryInfo.long]);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // const mapCenter = { lat: 34.80746, lng: -40.4796 };
  const mapZoom = 3;

  return (
    <MapContainer
      center={mapCenter}
      zoom={mapZoom}
      className="h-[500px]  border w-[85%] border border-r-emerald-600 rounded-3xl"
    >
      <TileLayer
        url="https://api.maptiler.com/maps/basic-v2/256/{z}/{x}/{y}.png?key=ASfdTmjQ1Nzf3RT7kgo0"
        attribution='&copy; <a href="https://www.maptiler.com/">MapTiler</a> &copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      {showDataOnMap(mapCountries)}
    </MapContainer>
  );
};

export default Map;
