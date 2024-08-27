import React from "react";
import { FaWind } from "react-icons/fa";
import { FiSunrise, FiSunset } from "react-icons/fi";
import { IoSpeedometerOutline } from "react-icons/io5";
import { MdOutlineVisibility } from "react-icons/md";
import { WiHumidity, WiNightRainMix } from "react-icons/wi";

function TodayOtherInfo() {
  return (
    <div>
      {/*rain info*/}
      <div className="p-4 xl:px-20 mt-20 md:mt-[-2rem] md:p-8 flex ">
        {/*rain*/}
        <div className="bg-white h-[10rem] rounded-md p-4 w-[7rem] flex flex-col justify-center items-center">
          <h2 className=" whitespace-nowrap">Light Rain</h2>
          <WiNightRainMix className="text-5xl" />
        </div>
        {/*humidity info*/}
        <div className="bg-yellow-200 h-[10rem] w-full p-2 rounded-md flex flex-row overflow-x-scroll md:overflow-hidden flex-nowrap ml-5 xl:justify-between">
          <div className="flex flex-1 flex-col w-25 gap-4 py-2  items-center justify-around p-6">
            <h3 className="text-sm font-semibold whitespace-nowrap">
              Visibility
            </h3>
            <MdOutlineVisibility className="text-4xl" />
            <span className="text-sm font-semibold">10km</span>
          </div>
          <div className="flex flex-1 flex-col w-25 gap-4 py-2  items-center justify-around p-6">
            <h3 className="text-sm font-semibold whitespace-nowrap">
              Humidity
            </h3>
            <WiHumidity  className="text-4xl" />
            <span className="text-sm font-semibold">10km</span>
          </div>
          <div className="flex flex-1 flex-col w-25 gap-4 py-2  items-center justify-around p-6">
            <h3 className="text-sm font-semibold whitespace-nowrap">
              Wind speed
            </h3>
            <FaWind  className="text-4xl" />
            <span className="text-sm font-semibold">10km</span>
          </div>
          <div className="flex flex-1 flex-col w-25 gap-4 py-2  items-center justify-around p-6">
            <h3 className="text-sm font-semibold whitespace-nowrap">
              Air pressure
            </h3>
            <IoSpeedometerOutline  className="text-4xl " />
            <span className="text-sm font-semibold">10km</span>
          </div>
          <div className="flex flex-1 flex-col w-25 gap-4 py-2  items-center justify-around p-6">
            <h3 className="text-sm font-semibold whitespace-nowrap">
              Sunrise
            </h3>
            <FiSunrise  className="text-4xl" />
            <span className="text-sm font-semibold">10km</span>
          </div>
          <div className="flex flex-1 flex-col w-25 gap-4 py-2  items-center justify-around p-6">
            <h3 className="text-sm font-semibold whitespace-nowrap">
              Sunset
            </h3>
            <FiSunset  className="text-4xl t" />
            <span className="text-sm font-semibold">10km</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TodayOtherInfo;
