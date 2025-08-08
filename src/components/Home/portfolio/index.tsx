"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import { getImagePrefix } from "@/utils/utils";
import { Code } from "@/icons/code";
import { WandSparkles } from "@/icons/WandSparkles";
import { AtSign } from "@/icons/AtSign";
import { ChartNoAxes } from "@/icons/ChartNoAxes";

const portfolioData: { icon: string | React.ReactNode; title: string }[] = [
  {
    icon: <WandSparkles />,
    title: "Ui/Ux & Graphic Design",
  },
  {
    icon: <Code />,
    title: "Web & App Development",
  },
  {
    icon: <ChartNoAxes />,
    title: "Digital Marketing & SEO",
  },
  {
    icon: <AtSign />,
    title: "Branding & Identity",
  },
];

const Portfolio = () => {
  return (
    <section className="md:pt-48 sm:pt-28 pt-12" id="portfolio">
      <div className="container mx-auto lg:max-w-screen-xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 items-center gap-20">
          <motion.div
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: "-100%", opacity: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:-ml-32"
          >
            <Image
              src={`${getImagePrefix()}/images/portfolio/imgPortfolio.png`}
              alt="Portfolio"
              width={780}
              height={700}
              loading="lazy"
            />
          </motion.div>

          <motion.div
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: "100%", opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <p className="sm:text-28 text-18 text-muted mb-4">
              What we <span className="text-primary">Offer</span>
            </p>
            <h2 className="text-white sm:text-40 text-30 mb-4 font-medium">
              A design-driven suite of modern services to elevate your brand
              experience.
            </h2>
            <table className="w-full sm:w-[80%]">
              <tbody>
                {portfolioData.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b border-dark_border border-opacity-10"
                  >
                    <td className="py-5">
                      <div className="bg-primary p-4 rounded-full bg-opacity-20 w-fit">
                        {typeof item.icon === "string" ? (
                          <Image
                            src={`${getImagePrefix()}/${item.icon}`}
                            alt={item.title}
                            width={35}
                            height={35}
                            loading="lazy"
                          />
                        ) : (
                          item.icon
                        )}
                      </div>
                    </td>
                    <td className="py-5">
                      <h4 className="text-muted sm:text-28 text-22 ml-5">
                        {item.title}
                      </h4>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
