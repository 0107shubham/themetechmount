import React from "react";
import { IoMdPerson } from "react-icons/io";
import { GoComment } from "react-icons/go";
import { useParams } from "react-router-dom";
import { BlogsData } from "../Data";
import Navigation from "./Navigation";

const BlogDetails = () => {
  const { id } = useParams();

  const filteredData = BlogsData.find((item) => item.id.toString() === id);

  if (!filteredData) {
    return <p>Blog post not found.</p>;
  }

  console.log(filteredData);

  return (
    <div className="w-full">
      <div className="bg-black w-full">
        <Navigation />
      </div>
      <div className="w-full flex justify-center items-center h-[30vw] md:h-[20vw] bg-cover bg-[url('https://res.cloudinary.com/drvjsegeb/image/upload/v1717399420/slider_h7kdml.jpg')]">
        <p className="uppercase text-[5vw] text-white">Blogs</p>
      </div>
      <div className="w-full px-[6px] md:px-[21vw] py-[5vw] ">
        {/* Comment Section */}
        <div className="mb-8 bg-[#F5F5F5]">
          <p className="text-[4vw]   sm:text-[5vw]  md:text-[3vw] font-bold">
            {filteredData.Name}
          </p>
          {filteredData.imageUrl && (
            <img
              src={filteredData.imageUrl}
              alt="party"
              className="w-full aspect-video"
            />
          )}

          {filteredData.videoUrl && (
            <div className="mt-[1vw]">
              <iframe
                className="w-full aspect-video"
                src={filteredData.videoUrl.replace("watch?v=", "embed/")}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                title={filteredData.title}
              ></iframe>
            </div>
          )}

          <div className="w-full px-[3px] sm:px-[3vw]">
            <div className="w-full flex items-center   my-[1vw]">
              <p className="text-[16px] md:text-[1.4vw] text-gray-600 w-full  flex items-center  px-[3vw]">
                <span className="flex items-center">
                  {" "}
                  <IoMdPerson className="mr-[.5vw]" />
                  <span className="mx-[.5vw]">John Doe</span>
                </span>{" "}
                |{" "}
                <span className="flex items-center">
                  {" "}
                  <GoComment className="mx-[.5vw]" />
                  <span className="mx-[.5vw]">comment</span>
                </span>
              </p>
            </div>

            <div className="h-[.05vw] w-full bg-gray-500  my-[1vw]"></div>
            <h2 className="text-[16px] sm:text-[2vw] font-semibold mt-[1vw]">
              CRAS IN JUSTO IN NEQUE IMPERDIET GRAVIDA
            </h2>
            <p className="mt-[1vw] text-[14px] sm:text-[1vw] text-gray-500">
              The standard chunk of Lorem Ipsum used since the 1500s is
              reproduced below for those interested. Sections de Finibus Bonorum
              et Malorum” by Cicero are also reproduced accompanied by English
              versions from the 1914 translation by H. Raby.
            </p>

            {/* Highlighted Quote */}
            <div className="bg-white flex flex-col sm:justify-center sm:items-center sm:p-[3vw]  my-[3vw]">
              <p className="italic text-[14px] sm:text-[1.1vw] font-medium">
                CONTARY POPULAR IS SIMPLY DUMMY TEXT OF KNOWN PRINTERTHE PRINTUN
                KNOWN PRINTER TOOK A GALLEY OF TYPE ANAMBT HE PRINTUN KNOWN
                PRINTER TOOK A GALLEY OF TYPE ANAMBT.
              </p>
              <p className="font-bold mt-[1vw] text-gray-400 text-[14px] sm:text-[.9vw]">
                <span className="  font-medium text-gray-700">
                  RASHED KABIR
                </span>
                / CEO, California
              </p>
            </div>

            <p className="my-[2vw] text-gray-600 text-[14px] md:text-[1vw]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore Quis ipsum
              suspendisse ultrices gravida.
            </p>

            {/* image party */}
            <div className="grid grid-cols-2 gap-[2vw]">
              <img
                src="https://res.cloudinary.com/drvjsegeb/image/upload/v1718111414/service-detail-2_fix2bk.jpg"
                alt="blog_deta_2"
                className="w-full aspect-square"
              />
              <img
                src="https://res.cloudinary.com/drvjsegeb/image/upload/v1717827175/gallary-img-2_vyybyu.jpg"
                alt="blog_deta_2"
                className="w-full aspect-square"
              />
            </div>

            {/* Executive's Priorities */}
            <div className="mb-8">
              <h3 className="text-[16px] sm:text-[1.8vw] my-[1vw] font-bold">
                LEARN ABOUT THE EXECUTIVE’S PRIORITIES
              </h3>
              <p className="my-[2vw] text-gray-600 text-[14px] sm:text-[1vw] font-medium">
                The standard chunk of Lorem Ipsum used since the 1500s is
                reproduced below for those interested. Sections 1.10.32 and
                1.10.33 from “de Finibus Bonorum et Malorum” by Cicero are also
                reproduced accompanied by English versions from the 1914
                translation by H. Raby.
              </p>
            </div>
            {/* horiZontal line */}
            <div className="h-[.05vw] w-full bg-gray-500  my-[1vw]"></div>
            {/* Tags */}
            <div className="mb-[3vw]">
              <span className="font-medium text-[18px] sm:text-[1.5vw]">
                TAGS-{" "}
              </span>
              <span className="inline-block text-[14px] sm:text-[1vw]  text-gray-600 border-gray-600 border-[0.05vw] px-[1.2vw] py-[.5vw]  mr-[1.2vw]">
                Design
              </span>
              <span className="inline-block text-[14px] sm:text-[1vw]  text-gray-600 border-gray-600 border-[0.05vw] px-[1.2vw] py-[.5vw]  mr-[1.2vw]">
                EventPlanning
              </span>
              <span className="inline-block text-[14px] sm:text-[1vw]   text-gray-600 border-gray-600 border-[0.05vw] px-[1.2vw] py-[.5vw]  mr-[1.2vw]">
                Party
              </span>
            </div>

            {/* horiZontal line */}
            <div className="h-[.05vw] w-full bg-gray-500  my-[1vw]"></div>

            {/* Leave a Reply */}
            <div className="w-full pb-[5vw]">
              <h4 className="text-xl font-semibold mb-4">LEAVE A REPLY</h4>
              <form>
                <textarea
                  className="w-full text-[14px] sm:text-[1vw]   font-medium p-[1vw] border-b-[.05vw] bg-[#F5F5F5] border-gray-500 outline-none mb-[2vw]"
                  placeholder="Comment"
                  rows="3"
                ></textarea>
                <input
                  type="text"
                  className="w-full text-[14px] sm:text-[1vw]   font-medium p-[1vw] border-b-[.05vw] bg-[#F5F5F5] border-gray-500 outline-none mb-[2vw]"
                  placeholder="Name (required)"
                />
                <input
                  type="email"
                  className="w-full text-[14px] sm:text-[1vw]  font-medium p-[1vw] border-b-[.05vw] bg-[#F5F5F5] border-gray-500 outline-none mb-[2vw]"
                  placeholder="Email (required)"
                />
                <input
                  type="url"
                  className="w-full text-[14px] sm:text-[1vw]  font-medium p-[1vw] border-b-[.05vw] bg-[#F5F5F5] border-gray-500 outline-none mb-[2vw]"
                  placeholder="Website"
                />
                <div className="flex items-center mb-4">
                  <input type="checkbox" id="saveInfo" className="mr-2" />
                  <label
                    htmlFor="saveInfo"
                    className=" text-[14px] sm:text-[1vw]  font-medium text-gray-600"
                  >
                    Save my name, email, and website in this browser for the
                    next time I comment.
                  </label>
                </div>
                <button
                  type="submit"
                  className=" bg-gradient-to-r from-[#9FF0BA] to-[#C3A1F6]  text-black px-[3vw] py-[1vw] text-[14px]  text-[1.2vw] font-semibold"
                >
                  Post Comment
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
