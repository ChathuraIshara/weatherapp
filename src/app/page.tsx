'use client';
import Forecast from "@/components/Forecast";
import Navbar from "@/components/Navbar";
import Today from "@/components/Today";
import TodayOtherInfo from "@/components/TodayOtherInfo";
import { SunTimes, WeatherList } from "@/types";
import { useState } from "react";

export default function Home() {
  const [forecastDetails,setForecastDetails]=useState<WeatherList[]>([]);
  const [loading,setLoading]=useState(true);
  const [sunTimes, setSunTimes] = useState<SunTimes>({
    sunrise: 0, // You can set a default value, like 0 or a specific timestamp
    sunset: 0,
  });

 
  
  return (
    <div className="bg-gray-100  min-h-screen">
      <Navbar loading={loading} setLoading={setLoading} sunTimes={sunTimes} setSunTimes={setSunTimes} forecastDetails={forecastDetails} setForecastDetails={setForecastDetails}></Navbar>
      <Navbar 
        loading={loading} 
        setLoading={setLoading} 
        sunTimes={sunTimes} 
        setSunTimes={setSunTimes} 
        forecastDetails={forecastDetails} 
        setForecastDetails={setForecastDetails} 
      />
      {loading ? (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
          <div className="text-center">
            <p className="text-lg font-semibold">Loading...</p>
          </div>
        </div>
      ) : (
        <>
          <Today sunTimes={sunTimes} forecastDetails={forecastDetails} />
          <TodayOtherInfo sunTimes={sunTimes} forecastDetails={forecastDetails} />
          <Forecast sunTimes={sunTimes} forecastDetails={forecastDetails} />
        </>
      )}
    </div>
  );
}
