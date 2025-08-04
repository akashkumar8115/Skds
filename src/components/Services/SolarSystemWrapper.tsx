"use client";

import dynamic from "next/dynamic";

// Prevent SSR of SolarSystem inside the wrapper too
const SolarSystem = dynamic(() => import("./SolarSystem"), { ssr: false });

export default function SolarSystemWrapper() {
  return <SolarSystem />;
}
