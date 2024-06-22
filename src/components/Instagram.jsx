import React from "react";

const images = [
  {
    id: 1,
    imageUrl:
      "https://res.cloudinary.com/drvjsegeb/image/upload/v1719069668/Screenshot_2024-06-22_204508_rdhiwq.png",
  },
  {
    id: 2,
    imageUrl:
      "https://res.cloudinary.com/drvjsegeb/image/upload/v1719069656/Screenshot_2024-06-22_204445_zhzzjp.png",
  },
  {
    id: 3,
    imageUrl:
      "https://res.cloudinary.com/drvjsegeb/image/upload/v1719069649/Screenshot_2024-06-22_204420_d4ob3y.png",
  },
  {
    id: 4,
    imageUrl:
      "https://res.cloudinary.com/drvjsegeb/image/upload/v1719069644/Screenshot_2024-06-22_204354_a3uz5f.png",
  },
  {
    id: 5,
    imageUrl:
      "https://res.cloudinary.com/drvjsegeb/image/upload/v1719069636/Screenshot_2024-06-22_204325_nrw2jl.png",
  },
  {
    id: 6,
    imageUrl:
      "https://res.cloudinary.com/drvjsegeb/image/upload/v1719069631/Screenshot_2024-06-22_204251_mysush.png",
  },
];

const instagramProfileUrl = "https://www.instagram.com/multi.fynatheme/";

const Instagram = () => {
  return (
    <div className="w-full bg-black relative p-[0.2vw] ">
      <div className="w-full  my-[4vw] grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-[.1vw]  bg-purple-200">
        {images.map((image) => (
          <div key={image.id} className="overflow-hidden rounded-sm shadow-lg">
            <a
              href={instagramProfileUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={image.imageUrl}
                alt={`Instagram ${image.id}`}
                className="w-full h-[18vw] transform transition-transform duration-300 hover:scale-105"
              />
            </a>
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
