import React from "react";

const InstaImage = [
  {
    id: 1,
    imgUrl:
      "https://res.cloudinary.com/drvjsegeb/image/upload/v1717946911/ig1_wr1rye.jpg",
  },
  {
    id: 2,
    imgUrl:
      "https://res.cloudinary.com/drvjsegeb/image/upload/v1717946911/ig1_wr1rye.jpg",
  },
  {
    id: 3,
    imgUrl:
      "https://res.cloudinary.com/drvjsegeb/image/upload/v1717946911/ig1_wr1rye.jpg",
  },
  {
    id: 4,
    imgUrl:
      "https://res.cloudinary.com/drvjsegeb/image/upload/v1717946911/ig1_wr1rye.jpg",
  },
  {
    id: 5,
    imgUrl:
      "https://res.cloudinary.com/drvjsegeb/image/upload/v1717946911/ig1_wr1rye.jpg",
  },
  {
    id: 6,
    imgUrl:
      "https://res.cloudinary.com/drvjsegeb/image/upload/v1717946911/ig1_wr1rye.jpg",
  },
];

const Instagram = () => {
  return (
    <div className="w-full bg-black relative p-[0.2vw] ">
      <div className="w-full  my-[4vw] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-[.1vw]  bg-purple-200">
        {InstaImage.map((image) => (
          <div key={image.id} className="overflow-hidden rounded-sm shadow-lg">
            <img
              src={image.imgUrl}
              alt={`Instagram ${image.id}`}
              className="w-full h-[18vw] transform transition-transform duration-300 hover:scale-105"
            />
          </div>
        ))}
        <div className="absolute  top-[47%] bottom-[47%] left-[47%] right-[47%]">
          <img
            src="https://res.cloudinary.com/drvjsegeb/image/upload/v1717948054/instgram_xjfm5w.jpg"
            alt="instagram"
            className="h-[5vw] rounded-lg "
          />
        </div>
      </div>
    </div>
  );
};

export default Instagram;
