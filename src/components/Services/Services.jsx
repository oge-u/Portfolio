import React from "react";
import { FaCameraRetro } from "react-icons/fa";
import { GiNotebook } from "react-icons/gi";
import { SlNote } from "react-icons/sl";

const skillsData = [
  {
    name: "App Development",
    icon: <FaCameraRetro className="text-4xl text-primary" />,
    link: "#",
    description:
      "We create Amazing Apps",
    aosDelay: "0",
  },
  {
    name: "Web Designing",
    icon: <GiNotebook className="text-4xl text-primary" />,
    link: "#",
    description:
      "We create Responsive Websites",
    aosDelay: "300",
  },
  {
    name: "Graphic Designing",
    icon: <SlNote className="text-4xl text-primary" />,
    link: "#",
    description:
      "Beautiful Graphics for you",
    aosDelay: "500",
  },
  {
    name: "Digital Marketing",
    icon: <SlNote className="text-4xl text-primary" />,
    link: "#",
    description:
      "We help you manage your brand",
    aosDelay: "700",
  },
  {
    name: "Video Marketing",
    icon: <SlNote className="text-4xl text-primary" />,
    link: "#",
    description:
      "We help you manage your brand",
    aosDelay: "700",
  },
  {
    name: "Email Marketing",
    icon: <SlNote className="text-4xl text-primary" />,
    link: "#",
    description:
      "We help you manage your brand",
    aosDelay: "700",
  },
];
const Services = () => {
  return (
    <>
      <span id="about"></span>
      <div className="bg-gray-100 dark:bg-black dark:text-white py-12 sm:grid sm:place-items-center">
        <div className="container">
          {/* Header */}
          <div className="pb-12 text-center space-y-3">
            <h1
              data-aos="fade-up"
              className="text-3xl font-semibold sm:text-3xl text-violet-950 dark:text-primary"
            >
              Explore Our Services
            </h1>
            <p
              data-aos="fade-up"
              className="text-gray-600 dark:text-gray-400 text-sm"
            >
              These are some of our Services
            </p>
          </div>

          {/* services cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
            {skillsData.map((skill) => (
              <div
                key={skill.name}
                data-aos="fade-up"
                data-aos-delay={skill.aosDelay}
                className="card space-y-3 sm:space-y-4 p-4"
              >
                <div>{skill.icon}</div>
                <h1 className="text-lg font-semibold">{skill.name}</h1>
                <p className="text-gray-600 dark:text-gray-400">
                  {skill.description}
                </p>
              </div>
            ))}
          </div>

          {/* button */}
          <div
            data-aos="fade-up"
            data-aos-delay="900"
            data-aos-offset="0"
            className="text-center mt-4 sm:mt-8"
          >
           <a href="#projects"><button className="primary-btn">Learn More</button></a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
