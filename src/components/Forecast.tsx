import React from "react";
import { BsClouds } from "react-icons/bs";
import { FaWind } from "react-icons/fa";
import { FiSunrise, FiSunset } from "react-icons/fi";
import { IoSpeedometerOutline } from "react-icons/io5";
import { MdOutlineVisibility } from "react-icons/md";
import { WiHumidity, WiNightRainMix } from "react-icons/wi";

function Forecast() {
    const forecastData = [
        {
          date: "27.08",
          temperature: "25°",
          feelsLike: "Feels like 25°",
          description: "Broken clouds",
          visibility: "10km",
          humidity: "80%",
          windSpeed: "10 km/h",
          airPressure: "1015 hPa",
          sunrise: "6:00 AM",
          sunset: "7:00 PM",
        },
        // Add 6 more entries with different data for other days
        {
          date: "28.08",
          temperature: "26°",
          feelsLike: "Feels like 26°",
          description: "Partly cloudy",
          visibility: "10km",
          humidity: "75%",
          windSpeed: "12 km/h",
          airPressure: "1013 hPa",
          sunrise: "6:05 AM",
          sunset: "7:01 PM",
        },
        {
            date: "29.08",
            temperature: "26°",
            feelsLike: "Feels like 26°",
            description: "Partly cloudy",
            visibility: "10km",
            humidity: "75%",
            windSpeed: "12 km/h",
            airPressure: "1013 hPa",
            sunrise: "6:05 AM",
            sunset: "7:01 PM",
          },
          {
            date: "30.08",
            temperature: "26°",
            feelsLike: "Feels like 26°",
            description: "Partly cloudy",
            visibility: "10km",
            humidity: "75%",
            windSpeed: "12 km/h",
            airPressure: "1013 hPa",
            sunrise: "6:05 AM",
            sunset: "7:01 PM",
          },
          {
            date: "31.08",
            temperature: "26°",
            feelsLike: "Feels like 26°",
            description: "Partly cloudy",
            visibility: "10km",
            humidity: "75%",
            windSpeed: "12 km/h",
            airPressure: "1013 hPa",
            sunrise: "6:05 AM",
            sunset: "7:01 PM",
          },
          {
            date: "01.09",
            temperature: "26°",
            feelsLike: "Feels like 26°",
            description: "Partly cloudy",
            visibility: "10km",
            humidity: "75%",
            windSpeed: "12 km/h",
            airPressure: "1013 hPa",
            sunrise: "6:05 AM",
            sunset: "7:01 PM",
          },
        // Add other days' data similarly...
      ];
    
  return (
    <div className="p-4 xl:px-20  md:mt-[-2rem] w-full">
      {/*heading*/}
      <h1 className="text-2xl">
        Forecast <span className="font-light">(7 days)</span>
      </h1>
      {/*wrapper*/}
      <div className="h-full p-2 rounded-md   md:overflow-hidden flex-nowrap mt-5 xl:justify-between">
        {/*single day continer*/}
        {forecastData.map((day, index) => (
        <div
          key={index}
          className="bg-white h-[10rem] p-4 rounded-md flex flex-row gap-6 mb-4"
        >
          {/* img and day container */}
          <div className="flex flex-col gap-3 justify-between">
            <BsClouds className="text-5xl" />
            <span className="text-xl">{day.date}</span>
            <span className="text-sm">{day.date}</span>
          </div>
          {/* temp container */}
          <div className="min-w-[8rem] flex flex-col p-3">
            <h1 className="text-5xl">{day.temperature}</h1>
            <p className="text-sm">{day.feelsLike}</p>
            <p className="text-sm">{day.description}</p>
          </div>
          {/* info container */}
          <div className="flex flex-row w-full overflow-x-scroll md:overflow-hidden justify-between">
            <div className="flex flex-col w-25 gap-6 py-2 items-center justify-around p-6">
              <h3 className="text-sm font-semibold whitespace-nowrap">
                Visibility
              </h3>
              <MdOutlineVisibility className="text-4xl" />
              <span className="text-sm font-semibold">{day.visibility}</span>
            </div>
            <div className="flex flex-col w-25 gap-4 py-2 items-center justify-around p-6">
              <h3 className="text-sm font-semibold whitespace-nowrap">
                Humidity
              </h3>
              <WiHumidity className="text-4xl" />
              <span className="text-sm font-semibold">{day.humidity}</span>
            </div>
            <div className="flex flex-col w-25 gap-4 py-2 items-center justify-around p-6">
              <h3 className="text-sm font-semibold whitespace-nowrap">
                Wind speed
              </h3>
              <FaWind className="text-4xl" />
              <span className="text-sm font-semibold">{day.windSpeed}</span>
            </div>
            <div className="flex flex-col w-25 gap-4 py-2 items-center justify-around p-6">
              <h3 className="text-sm font-semibold whitespace-nowrap">
                Air pressure
              </h3>
              <IoSpeedometerOutline className="text-4xl" />
              <span className="text-sm font-semibold">{day.airPressure}</span>
            </div>
            <div className="flex flex-col w-25 gap-4 py-2 items-center justify-around p-6">
              <h3 className="text-sm font-semibold whitespace-nowrap">
                Sunrise
              </h3>
              <FiSunrise className="text-4xl" />
              <span className="text-sm font-semibold">{day.sunrise}</span>
            </div>
            <div className="flex flex-col w-25 gap-4 py-2 items-center justify-around p-6">
              <h3 className="text-sm font-semibold whitespace-nowrap">
                Sunset
              </h3>
              <FiSunset className="text-4xl" />
              <span className="text-sm font-semibold">{day.sunset}</span>
            </div>
          </div>
        </div>
      ))}
        
      </div>
    </div>
  );
}

export default Forecast;
