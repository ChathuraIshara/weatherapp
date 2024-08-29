import { SunTimes, WeatherList } from "@/types";
import { kelvinToCelsius } from "@/utils/TemparatureUtils";
import { format, parseISO } from "date-fns";
import React, { useEffect } from "react";
import { WiNightRainMix } from "react-icons/wi";
import Image from "next/image";

interface TodayProps {
  forecastDetails: WeatherList[];
  sunTimes:SunTimes
}

function Today({ forecastDetails,sunTimes }: TodayProps) {
  const getFormattedDay = () => {
    if (forecastDetails.length > 0 && forecastDetails[0].dt_txt) {
      return format(parseISO(forecastDetails[0].dt_txt), "EEEE");
    }
    return "Date not available"; // Fallback or default message
  };
  const getFormattedDate = () => {
    if (forecastDetails.length > 0 && forecastDetails[0].dt_txt) {
      return format(parseISO(forecastDetails[0].dt_txt), "dd.MM.yyyy");
    }
    return "Date not available"; // Fallback or default message
  };
  const getFormattedTime = (date:string) => {
    if (date) {
      return format(parseISO(date), "h:mm a");
    }
    return "N/A"; // Fallback or default message
  };

 
  return (
    <div className="relative top-20 pt-20 md:pt-[7rem] p-4 md:p-8 md:top-0 xl:px-20">
      <h1 className="text-2xl">
        {getFormattedDay()}{" "}
        <span className="font-light">({getFormattedDate()})</span>
      </h1>
      {/*today temp container*/}
      <div className="bg-white h-[10rem] mt-2 pl-8  p-4 rounded-md flex items-center overflow-hidden sm:overflow-visible">
        {/*for today overall temp*/}
        <div className="min-w-[8rem]">
          <h1 className="text-5xl">
            {forecastDetails && forecastDetails[0] && forecastDetails[0].main
              ? kelvinToCelsius(forecastDetails[0].main.temp)
              : "N/A"}
            °
          </h1>
          <p className="text-sm">Feels like {forecastDetails && forecastDetails[0] && forecastDetails[0].main
              ? kelvinToCelsius(forecastDetails[0].main.feels_like)
              : "N/A"}°</p>
          <p className="text-sm">{forecastDetails && forecastDetails[0] && forecastDetails[0].main
              ? kelvinToCelsius(forecastDetails[0].main.temp_min)
              : "N/A"}°↓ {forecastDetails && forecastDetails[0] && forecastDetails[0].main
                ? kelvinToCelsius(forecastDetails[0].main.temp_max)
                : "N/A"}°↑</p>
        </div>
        {/*today other info container*/}
        <div className="flex flex-row gap-4  px-8   overflow-x-scroll  flex-nowrap ">
          {forecastDetails.map((data, index) => (
            <div
              key={index}
              className="flex flex-1 flex-col w-32 gap-4 py-2  items-center justify-around p-6"
            >
              <h3 className="text-sm font-semibold whitespace-nowrap">
                {getFormattedTime(data.dt_txt)}
              </h3>
              <Image src={`https://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`} alt='' width={100} height={100}></Image>
              {/* <WiNightRainMix className="text-5xl text-amber-700" /> */}
              <span className="text-sm font-semibold">{ kelvinToCelsius(data.main.temp)}°</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Today;
