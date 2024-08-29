"use client";
import React, { FormEvent, useEffect, useState } from "react";
import { TbSunFilled } from "react-icons/tb";
import { BiCurrentLocation } from "react-icons/bi";
import { MdOutlineLocationOn, MdOutlineSearch } from "react-icons/md";
import { endPoints, geoCodingApiKey, weatherMapApiKey } from "../../services";
import { SunTimes, WeatherList } from "@/types";

interface TodayProps {
  forecastDetails: WeatherList[];
  setForecastDetails: (details: WeatherList[]) => void;
  sunTimes: SunTimes;
  setSunTimes: (details: SunTimes) => void;
  loading: boolean; // Add this
  setLoading: (loading: boolean) => void; // Add this
}

function Navbar({
  forecastDetails,
  setForecastDetails,
  sunTimes,
  setSunTimes,
  loading,
  setLoading
}: TodayProps) {
  const [searchLocation, setSearchLocation] = useState("");
  const [long, setLong] = useState(79.8562055); //default colombo long and lat
  const [lat, setLat] = useState(6.92183865);
  const [displayedLocation, setDisplayedLocation] = useState("Colombo"); //navbar display location

  //use effect for fetching weather data
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true); // Start loading
        const response = await fetch(
          endPoints.weathermapApi +
            `lat=${lat}&lon=${long}&appid=${weatherMapApiKey}`
        );
        const data = await response.json();

        console.log(data.list);
        setForecastDetails(data.list);
        setDisplayedLocation(data.city.name);
        setSunTimes({
          sunrise: data.city.sunrise,
          sunset: data.city.sunset,
        });
        console.log("forecast inside navbar", forecastDetails); // Note: forecastDetails will not immediately reflect the updated state here
      } catch (error) {
        console.error("Error:", error);
      }
      finally {
        setLoading(false); // Set loading to false when fetching is complete
      }
    };

    fetchData();
  }, [lat, long]);


  const handleCurrentLocation=()=>
  {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLat(latitude);
          setLong(longitude);
          console.log('Current Location:', latitude, longitude);
        },
        (error) => {
          console.error('Error getting current location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by this browser.');
    }

  }
 

  //search location submission
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    fetch(
      endPoints.geocodingApi + `${searchLocation}&key=${geoCodingApiKey}` //for fetching longtitudes and latitudes of search location
    )
      .then((response) => response.json())
      .then((data) => {
        const location = data.result[0].geometry.location;
        const latitude = location.lat;
        const longitude = location.lng;
        setLat(latitude);
        setLong(longitude);
        console.log(latitude, "-", longitude);
        setDisplayedLocation(searchLocation);
      })
      .catch((error) => console.error("Error:", error));
    console.log(searchLocation);
  };

  return (
    <div className="fixed top-0 left-0 right-0 h-20 bg-white py-6 px-4 flex justify-between xl:px-20 z-50 ">
      {/*weather and sun container*/}
      <div className="flex items-center gap-4">
        <h1 className="text-4xl text-gray-500">Weather</h1>
        <TbSunFilled className="text-4xl text-yellow-300" />
      </div>
      {/*location and searchbar container*/}
      <div className="flex items-center justify-center gap-1 md:gap-4">
        <BiCurrentLocation onClick={handleCurrentLocation} title='your current location' className="text-xl md:text-3xl text-gray-400 hover:opacity-80 cursor-pointer" />
        <MdOutlineLocationOn className="text-xl md:text-3xl" />
        <h2 className="text-sm md:text-xl">{displayedLocation}</h2>
        <div className="absolute top-24 left-4  md:block md:relative mt-1 md:top-auto md:left-auto">
          <form
            className="flex items-center justify-center"
            onSubmit={handleSubmit}
          >
            <input
              value={searchLocation}
              onChange={(e) => setSearchLocation(e.target.value)}
              type="text"
              placeholder="Search location..."
              className="ring-2 h-10 ring-gray-200 text-xl px-4 py-2 w-[15rem] rounded-md  focus:outline-none focus:ring-blue-500"
            ></input>
            <button
              type="submit"
              className="bg-blue-500 h-10 ring-2 rounded-tr-md  rounded-br-md ring-blue-500 py-2 px-4"
            >
              <MdOutlineSearch className="text-white text-2xl" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
