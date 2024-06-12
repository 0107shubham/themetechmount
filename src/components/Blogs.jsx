import React from "react";

const BlogsData = [
  {
    id: 1,
    Name: "Top 10 After Party Golden Rules",
    description:
      "There are many variations available, majorly have suffered alteration.",
    imageUrl:
      "https://res.cloudinary.com/drvjsegeb/image/upload/v1717936055/event-image-001-780x590_dz5c8y.jpg",
  },
  {
    id: 2,
    Name: "How Your Events Can Make An Impact",
    description:
      "There are many variations available, majorly have suffered alteration.",
    imageUrl:
      "https://res.cloudinary.com/drvjsegeb/image/upload/v1717936085/post-image-002-780x590_biw6qa.jpg",
  },
  {
    id: 3,
    Name: "How to Find the Perfect Event Venue",
    description:
      "There are many variations available, majorly have suffered alteration.",
    imageUrl:
      "https://res.cloudinary.com/drvjsegeb/image/upload/v1717936091/post-image-004-780x590_ztbevs.jpg",
  },
  {
    id: 4,
    Name: "5 Steps To Planning a Sweet Party",
    description:
      "There are many variations available, majorly have suffered alteration.",
    imageUrl:
      "https://res.cloudinary.com/drvjsegeb/image/upload/v1717936099/post-image-001-780x590_ebjk4n.jpg",
  },
];

const Blogs = () => {
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
        {BlogsData.map((blog) => (
          <li className="w-[50%]  flex py-[2vw]" key={blog.id}>
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
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Blogs;
