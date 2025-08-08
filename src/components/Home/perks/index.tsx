import { Atom } from "@/icons/Atom";
import { ChartLine } from "@/icons/ChartLine";
import { HeartHandshake } from "@/icons/HeartHandshake";
import { JSX } from "react";

const perksData: {
  icon: JSX.Element;
  title: string;
  text: string;
  space: string;
}[] = [
  {
    icon: <Atom/>,
    title: "Creative First",
    text: "We lead with originality and cultural elegance.",
    space: "lg:mt-8",
  },
  {
    icon: <HeartHandshake/>,
    title: "Client Centric",
    text: "Every pixel and line of code tailored to your vision.",
    space: "lg:mt-14",
  },
  {
    icon: <ChartLine/>,
    title: "Scalable Solution",
    text: "Design to grow with <br /> your business",
    space: "lg:mt-4",
  },
];


const Perks = () => {
  return (
    <section className="pt-40 pb-28 relative">
      <div className="container mx-auto lg:max-w-screen-xl px-4">
        <div className="text-center">
          <p className="text-muted sm:text-28 text-18 mb-4 pb-6 relative after:content-[''] after:w-8 after:h-0.5 after:bg-primary after:absolute after:bottom-0 after:left-1/2">
            What <span className="text-primary">Drive Us</span>
          </p>
          <h2 className="text-white sm:text-36 text-27 font-medium">
           Innovate, Transform, Grow – Advanced Tech Services Redefined
          </h2>
          <div className="mt-16 border border-border grid lg:grid-cols-3 sm:grid-cols-2 border-opacity-20 py-16 gap-10 px-20 rounded-3xl sm:bg-perk bg-dark_grey bg-opacity-35 lg:bg-bottom bg-center bg-no-repeat">
            {perksData.map((item, index) => (
              <div
                key={index}
                className="text-center flex items-center justify-end flex-col"
              >
                <div className="bg-primary bg-opacity-25 backdrop-blur-sm p-4 rounded-full w-fit">
                  {item.icon}
                </div>
                <h4 className={`text-white text-28 mb-4 ${item.space}`}>
                  {item.title}
                </h4>
                <div
                  className="text-muted text-opacity-60"
                  dangerouslySetInnerHTML={{ __html: item.text }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-gradient-to-br from-tealGreen to-charcoalGray sm:w-50 w-96 sm:h-50 h-96 rounded-full sm:-bottom-80 bottom-0 blur-400 z-0 absolute sm:-left-48 opacity-60"></div>
    </section>
  );
};

export default Perks;
