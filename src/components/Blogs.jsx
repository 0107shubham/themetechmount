import React from "react";
import { BlogsData } from "../Data";
import { Link } from "react-router-dom";

const Blogs = () => {
  const requiredBlogsData = BlogsData.slice(0, 4);
  return (
    <div className="w-full bg-black px-[5vw]">
      <h1 className="text-white  uppercase">Blog </h1>
      <div className="w-full  flex items-center ">
        <p className="text-white w-[50%] text-[4vw] font-semibold uppercase">
          Recent Blog Posts
        </p>
        <p className="text-gray-400  text-[1.5vw] text-center w-[50%]">
          Event Planning industry. Event Planning has been the industry type
          specimen bookorem.
        </p>
      </div>
      <ul className="w-full  flex flex-wrap text-white">
        {requiredBlogsData.map((blog) => (
          <li className="w-[50%]  flex py-[2vw]" key={blog.id}>
            <Link to={`/blogs_details/${blog.id}`}>
              <div className="  flex py-[2vw]">
                <img
                  className="w-[25vw] h-[9vw]"
                  src={blog.imageUrl}
                  alt={blog.name}
                />
                <div className="pl-[2vw] pt-[.5vw] ">
                  <h2 className="font-sans text-[1.6vw] font-semibold uppercase hover:text-purple-700">
                    {blog.Name}
                  </h2>
                  <p className="font-sans text-[1.2vw] text-gray-400 ">
                    {blog.description}
                  </p>
                </div>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blogs;
