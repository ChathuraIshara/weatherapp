"use client";
import React, { FormEvent, useState } from "react";
import { TbSunFilled } from "react-icons/tb";
import { BiCurrentLocation } from "react-icons/bi";
import { MdOutlineLocationOn, MdOutlineSearch } from "react-icons/md";

function Navbar() {
  const [searchLocation, setSearchLocation] = useState("");

  //search location submission
  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(searchLocation)
  };

  return (
    <div className=" h-20 bg-white py-6 px-4 flex justify-between xl:px-20 ">
      {/*weather and sun container*/}
      <div className="flex items-center gap-4">
        <h1 className="text-4xl text-gray-500">Weather</h1>
        <TbSunFilled className="text-4xl text-yellow-300" />
      </div>
      {/*location and searchbar container*/}
      <div className="flex items-center justify-center gap-1 md:gap-4">
        <BiCurrentLocation className="text-3xl" />
        <MdOutlineLocationOn className="text-3xl" />
        <h2 className="text-xl">India</h2>
        <div className=" top-24 left-4 absolute md:block md:relative mt-1 md:top-auto md:left-auto">
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
