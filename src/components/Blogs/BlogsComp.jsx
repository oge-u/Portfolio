import React from "react";
import BlogCard from "./BlogCard";
import Img1 from "../../assets/blog/project-img1.png";
import Img2 from "../../assets/blog/project-img2.png";
import Img3 from "../../assets/blog/project-img3.png";

const BlogsData = [
  {
    id: 1,
    image: Img1,
    title: "Weather App",
    description:
      "Weather App ",
  
      link: "https://www.sabicoders.com.ng"

  },
  {
    id: 2,
    image: Img2,
    title: "E-Commerce Website",
    description:
      "An E-Commerce App",
      link: "https://www.sabicoders.com.ng"
  },
  {
    id: 3,
    image: Img3,
    title: "Uber Lite",
    description:
      "A clone of the Uber App ",
      link: "https://www.sabicoders.com.ng"
  },
  {
    id: 4,
    image: Img3,
    title: "Uber Lite",
    description:
      "A clone of the Uber App ",
      link: "https://www.sabicoders.com.ng"
  },
  {
    id: 5,
    image: Img3,
    title: "Uber Lite",
    description:
      "A clone of the Uber App ",
      link: "https://www.sabicoders.com.ng"
  },
  {
    id: 6,
    image: Img3,
    title: "Uber Lite",
    description:
      "A clone of the Uber App ",
      link: "https://www.sabicoders.com.ng"
  },
];

const BlogsComp = () => {
  return (
    <>
      <div className="bg-gray-100 dark:bg-gray-900 dark:text-white py-10 pb-14">
        <section data-aos="fade-up" className="container " id="projects">
          <h1 className="my-8 border-l-8 border-primary/50 py-2 pl-2 text-3xl font-semibold">
            Projects
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BlogsData.map((item) => ( 
              <BlogCard key={item.id} {...item} />
             ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default BlogsComp;
