"use client"
import { SportsSec } from "@/components/SportsSec";
import { SpotlightCollection } from "@/components/SpotlightCollection";


export default function Home() {
  return (
    <>
      <div className="bg-[#F7F7F8] dark:bg-[#292B32]">
        <SportsSec />
        <SpotlightCollection />
      </div>
    </>
  );
}
