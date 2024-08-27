import React from "react";
import { WiNightRainMix } from "react-icons/wi";

function Today() {
    const weatherData = [
        { time: '6:00 AM', temperature: '27°' },
        { time: '7:00 AM', temperature: '28°' },
        { time: '8:00 AM', temperature: '29°' },
        { time: '9:00 AM', temperature: '30°' },
        { time: '10:00 AM', temperature: '31°' },
        { time: '6:00 AM', temperature: '27°' },
        { time: '7:00 AM', temperature: '28°' },
        { time: '8:00 AM', temperature: '29°' },
        { time: '9:00 AM', temperature: '30°' },
        { time: '10:00 AM', temperature: '31°' },
        { time: '10:00 AM', temperature: '31°' },
        { time: '6:00 AM', temperature: '27°' },
        { time: '7:00 AM', temperature: '28°' },
        { time: '8:00 AM', temperature: '29°' },
        { time: '9:00 AM', temperature: '30°' },
        { time: '10:00 AM', temperature: '31°' },
        // Add more data points as needed
      ];
  return (
    <div className="relative top-20  p-4 md:p-8 md:top-0 xl:px-20">
      <h1 className="text-2xl">TuesDay <span className='font-light'>(27.08.2024)</span></h1>
      {/*today temp container*/}
      <div className="bg-white h-[10rem] mt-2 pl-8  p-4 rounded-md flex items-center overflow-hidden sm:overflow-visible">
        {/*for today overall temp*/}
        <div className="min-w-[8rem]">
          <h1 className="text-5xl">25°</h1>
          <p className="text-sm">Feels like25°</p>
          <p className="text-sm">25°↓ 27°↑</p>
        </div>
        {/*today other info container*/}
        <div className="flex flex-row gap-4  px-8   overflow-x-scroll  flex-nowrap ">
        {weatherData.map((data, index) => (
          <div
            key={index}
            className="flex flex-1 flex-col w-32 gap-4 py-2  items-center justify-around p-6"
          >
            <h3 className="text-sm font-semibold whitespace-nowrap">{data.time}</h3>
            <WiNightRainMix className="text-5xl text-amber-700" />
            <span className="text-sm font-semibold">{data.temperature}</span>
          </div>
        ))}
        </div>
      </div>
     
    </div>
  );
}

export default Today;
