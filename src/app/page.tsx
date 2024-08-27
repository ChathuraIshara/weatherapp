import Forecast from "@/components/Forecast";
import Navbar from "@/components/Navbar";
import Today from "@/components/Today";
import TodayOtherInfo from "@/components/TodayOtherInfo";
import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-gray-100  min-h-screen">
      <Navbar></Navbar>
      <Today></Today>
      <TodayOtherInfo></TodayOtherInfo>
      <Forecast></Forecast>
    </div>
  );
}
