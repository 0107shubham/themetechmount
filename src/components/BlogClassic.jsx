import React from "react";
import { IoMdPerson } from "react-icons/io";
import { GoComment } from "react-icons/go";
import { Link } from "react-router-dom";
import { BlogsData } from "../Data";
import Navigation from "./Navigation";

const articles = [
  {
    id: 1,
    title: "5 STEPS TO PLANNING A SWEET PARTY",
    author: "John Doe",
    date: "October 19, 2018",
    summary:
      "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections de Finibus Bonorum et Malorum” by Cicero are also reproduced accompanied by English versions from the 1914 translation by H. Raby.",
    imageUrl:
      "https://res.cloudinary.com/drvjsegeb/image/upload/v1718195257/post-image-001_wji9ea.jpg",
  },
  {
    id: 2,
    title: "HOW TO FIND THE PERFECT EVENT VENUE",
    author: "John Doe",
    date: "October 18, 2018",
    summary:
      "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections de Finibus Bonorum et Malorum” by Cicero are also reproduced accompanied by English versions from the 1914 translation by H. Raby.",
    imageUrl:
      "https://res.cloudinary.com/drvjsegeb/image/upload/v1718195264/post-image-004_lfdd6l.jpg",
  },
  {
    id: 3,
    title: "HOW YOUR EVENTS CAN MAKE AN IMPACT",
    author: "John Doe",
    date: "October 13, 2018",
    summary:
      "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections de Finibus Bonorum et Malorum” by Cicero are also reproduced accompanied by English versions from the 1914 translation by H. Raby.",
    imageUrl:
      "https://res.cloudinary.com/drvjsegeb/image/upload/v1718195272/post-image-002_rul8yi.jpg",
  },
  {
    id: 4,
    title: "UNUSUAL GIFTS FOR BIRTHDAYS",
    author: "John Doe",
    date: "October 13, 2018",
    summary:
      "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections de Finibus Bonorum et Malorum” by Cicero are also reproduced accompanied by English versions from the 1914 translation by H. Raby.",
    imageUrl:
      "https://res.cloudinary.com/drvjsegeb/image/upload/v1718195281/gallery-image-002_vxz8c1.jpg",
  },
  {
    id: 5,
    title: "TOP 10 AFTER PARTY GOLDEN RULES",
    author: "John Doe",
    date: "October 13, 2018",
    summary:
      "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections de Finibus Bonorum et Malorum” by Cicero are also reproduced accompanied by English versions from the 1914 translation by H. Raby.",
    imageUrl:
      "https://res.cloudinary.com/drvjsegeb/image/upload/v1718195286/event-image-001_wpbggz.jpg",
  },
  {
    id: 6,
    title: "10 WAYS TO SAVE $1000 ON A WEDDING",
    author: "John Doe",
    date: "September 12, 2018",
    summary:
      "The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections de Finibus Bonorum et Malorum” by Cicero are also reproduced accompanied by English versions from the 1914 translation by H. Raby.",
    videoUrl: "https://www.youtube.com/watch?v=0r4RBVX1XnY",
  },
];

const BlogClassic = () => {
  return (
    <div className="">
      <div className="bg-black w-full">
        <Navigation />
      </div>
      <div className="w-full px-[4vw] sm:px-[18vw]">
        {BlogsData.map((article) => (
          <div key={article.id} className="mb-[1vw]   ">
            {article.imageUrl && (
              <img
                src={article.imageUrl}
                alt={article.title}
                className="mt-[1vw] w-full aspect-video"
              />
            )}
            {article.videoUrl && (
              <div className="mt-[1vw]">
                <iframe
                  className="w-full aspect-video"
                  src={article.videoUrl.replace("watch?v=", "embed/")}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  title={article.title}
                ></iframe>
              </div>
            )}

            <h2 className="text-[2vw] font-semibold my-[1vw]">
              {article.title}
            </h2>
            {/* horiZontatal line */}
            <div className="h-[.05vw] w-full bg-gray-500  my-[1vw]"></div>
            <p className="text-[18px] sm:text-[1.4vw] text-gray-600 w-full  flex justify-around px-[3vw]">
              <span>{article.author}</span> | <span>{article.date}</span> |{" "}
              <span>comment</span>
            </p>
            <div className="h-[.05vw] w-full bg-gray-500  my-[1vw]"></div>
            <p className="my-[1.2vw] text-[14px] sm:text-[1.2vw] text-gray-400">
              {article.summary}
            </p>
            <button className="border-[.1vw] flex items-center px-[1vw] py-[.5vw] bg-gradient-to-r from-[#9FF0BA] to-[#C3A1F6] hover:bg-gradient-to-l ">
              <a
                href="#"
                className="text-black text-[16px] sm:text-[1.2vw] font-semibold"
              >
                <Link to={`/blogs_details/${article.id}`}>
                  continue reading
                </Link>{" "}
              </a>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogClassic;
