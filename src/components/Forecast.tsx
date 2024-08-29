'use client'
import { SunTimes, WeatherForecastData, WeatherList } from "@/types";
import { format, fromUnixTime, parseISO } from "date-fns";
import React from "react";
import { BsClouds } from "react-icons/bs";
import { FaWind } from "react-icons/fa";
import { FiSunrise, FiSunset } from "react-icons/fi";
import { IoSpeedometerOutline } from "react-icons/io5";
import { MdOutlineVisibility } from "react-icons/md";
import { WiHumidity, WiNightRainMix } from "react-icons/wi";
import { useEffect } from "react";
import { useState } from "react";
import { kelvinToCelsius } from "@/utils/TemparatureUtils";
import Image from "next/image";


interface TodayProps {
  forecastDetails: WeatherList[],
  sunTimes:SunTimes
}

function Forecast({forecastDetails,sunTimes}:TodayProps) {
  const [dailyWeatherData, setDailyWeatherData] = useState<WeatherForecastData[]>([]);

  function getDailyWeatherData(forecastDetails:WeatherList[]) {
    // Create a map to store the first occurrence of weather data for each day
    const dailyDataMap: { [date: string]: WeatherForecastData } = {};
   
  
    forecastDetails.forEach((item) => {
      const date = format(new Date(item.dt_txt), 'yyyy-MM-dd'); // Convert timestamp to date
     
      // If the date is not in the map, add the data
      if (!dailyDataMap[date]) {
        dailyDataMap[date] = item;
      }
    });
  
    // Get the values from the map and limit to 6 entries
    const dailyDataArray = Object.values(dailyDataMap).slice(0, 6);
  
    return dailyDataArray;
  }
  const getFormattedTime = (date:string) => {
    if (date) {
      return format(parseISO(date), "dd.MM");
    }
    return "N/A"; // Fallback or default message
  };

  useEffect(() => {
    const processedData = getDailyWeatherData(forecastDetails);
    setDailyWeatherData(processedData);
   
  }, [forecastDetails]);
    
  return (
    <div className="p-4 xl:px-20  md:mt-[-2rem] w-full">
      {/*heading*/}
      <h1 className="text-2xl">
        Forecast <span className="font-light">(7 days)</span>
      </h1>
      {/*wrapper*/}
      <div className="h-full p-2 rounded-md   md:overflow-hidden flex-nowrap mt-5 xl:justify-between">
        {/*single day continer*/}
        {dailyWeatherData.map((day, index) => (
        <div
          key={index}
          className="bg-white h-[10rem] p-4 rounded-md flex flex-row gap-6 mb-4"
        >
          {/* img and day container */}
          <div className="flex flex-col gap-1 items-center justify-between">
          <Image src={`https://openweathermap.org/img/wn/${day.weather[0].icon}@4x.png`} alt='' width={100} height={100}></Image>
            <span className="text-xl">{getFormattedTime(day.dt_txt)}</span>
            <span className="text-sm">{getFormattedTime(day.dt_txt)}</span>
          </div>
          {/* temp container */}
          <div className="min-w-[8rem] flex flex-col p-3">
            <h1 className="text-5xl">{kelvinToCelsius(day.main.temp)}°</h1>
            <p className="text-sm">Feels like {kelvinToCelsius(day.main.feels_like)}°</p>
            <p className="text-lg font-light">{day.weather[0].description}</p>
          </div>
          {/* info container */}
          <div className="flex flex-row w-full overflow-x-scroll md:overflow-hidden justify-between">
            <div className="flex flex-col w-25 gap-6 py-2 items-center justify-around p-6">
              <h3 className="text-sm font-semibold whitespace-nowrap">
                Visibility
              </h3>
              <MdOutlineVisibility className="text-4xl" />
              <span className="text-sm font-semibold">{day.visibility/1000}km</span>
            </div>
            <div className="flex flex-col w-25 gap-4 py-2 items-center justify-around p-6">
              <h3 className="text-sm font-semibold whitespace-nowrap">
                Humidity
              </h3>
              <WiHumidity className="text-4xl" />
              <span className="text-sm font-semibold">{day.main.humidity}%</span>
            </div>
            <div className="flex flex-col w-25 gap-4 py-2 items-center justify-around p-6">
              <h3 className="text-sm font-semibold whitespace-nowrap">
                Wind speed
              </h3>
              <FaWind className="text-4xl" />
              <span className="text-sm font-semibold">{day.wind.speed}km/h</span>
            </div>
            <div className="flex flex-col w-25 gap-4 py-2 items-center justify-around p-6">
              <h3 className="text-sm font-semibold whitespace-nowrap">
                Air pressure
              </h3>
              <IoSpeedometerOutline className="text-4xl" />
              <span className="text-sm font-semibold">{day.main.pressure} hPa</span>
            </div>
            <div className="flex flex-col w-25 gap-4 py-2 items-center justify-around p-6">
              <h3 className="text-sm font-semibold whitespace-nowrap">
                Sunrise
              </h3>
              <FiSunrise className="text-4xl" />
              <span className="text-sm font-semibold">{format(fromUnixTime(sunTimes.sunrise),"H:mm")}</span>
            </div>
            <div className="flex flex-col w-25 gap-4 py-2 items-center justify-around p-6">
              <h3 className="text-sm font-semibold whitespace-nowrap">
                Sunset
              </h3>
              <FiSunset className="text-4xl" />
              <span className="text-sm font-semibold">{format(fromUnixTime(sunTimes.sunset),"H:mm")}</span>
            </div>
          </div>
        </div>
      ))}
        
      </div>
    </div>
  );
}

export default Forecast;
