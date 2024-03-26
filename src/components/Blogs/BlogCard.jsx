import React from "react";


const BlogCard = ({ image, title, description, link }) => {
  return (
    <>
      <div className=" dark:text-white group">
        <div className="overflow-hidden">
          <img
            src={image}
            alt="No image"
            className="mx-auto h-[420px] w-full object-cover group-hover:scale-105 duration-300"
          />
        </div>
        <div className="space-y-2 p-4 ml-6 bg-black dark:bg-slate-950 -translate-y-16">
          <h1 className="line-clamp-1 text-white text-2xl font-semibold">{title}</h1>
          <p className="line-clamp-4 text-gray-500 text-sm">{description}</p>
          <div className="flex justify-end pr-4 text-gray-500">
          <a href={link}>
              <button className="primary-btn">View More</button> </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogCard;