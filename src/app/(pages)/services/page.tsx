// "use client";

// import dynamic from "next/dynamic";
// const SolarSystem = dynamic(() => import("@/components/Services/SolarSystem.client"), {
//   ssr: false, // ✅ disables server-side rendering
// });

// // import SolarSystemWrapper from "@/components/Services/SolarSystemWrapper";
// import Header from "@/components/Services/Header";
// import ServiceOrbit from "@/components/Services/ServiceOrbit";
// import WhyChooseUs from "@/components/Services/WhyChooseUs";
// import CallToAction from "@/components/Services/CallToAction";

// export default function Services() {
//   return (
//     <div className="min-h-screen relative bg-black text-white overflow-hidden">
//       <SolarSystem />
//        {/* <SolarSystemWrapper /> */}
//       <div className="relative z-10">
//         <Header />
//         <ServiceOrbit />
//         <WhyChooseUs />
//         <CallToAction />
//       </div>
//     </div>
//   );
// }



"use client"; // ✅ Ensure this is present at the very top

import dynamic from "next/dynamic";

// ✅ Dynamically import the .client.tsx file
const SolarSystem = dynamic(() => import("@/components/Services/SolarSystem.client"), {
  ssr: false,
  loading: () => <p>Loading Solar System...</p>, // Optional fallback
});

import Header from "@/components/Services/Header";
import ServiceOrbit from "@/components/Services/ServiceOrbit";
import WhyChooseUs from "@/components/Services/WhyChooseUs";
import CallToAction from "@/components/Services/CallToAction";

export default function Services() {
  return (
    <div className="min-h-screen relative bg-black text-white overflow-hidden">
      <SolarSystem />
      <div className="relative z-10">
        <Header />
        <ServiceOrbit />
        <WhyChooseUs />
        <CallToAction />
      </div>
    </div>
  );
}
