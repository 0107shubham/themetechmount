import React, { useState } from "react";
const items = [
  {
    id: 1,
    text: "Operation Methods",
    link: "https://www.themetechmount.com/wordpress/presentup/advanced/tag/concerts/",
  },
  {
    id: 2,
    text: "Birthday Party",
    link: "https://www.themetechmount.com/wordpress/presentup/advanced/category/events-for-kids/",
  },
  {
    id: 3,
    text: "Wedding Planning",
    link: "https://www.themetechmount.com/wordpress/presentup/advanced/category/weddings/",
  },
  {
    id: 4,
    text: "Corporate Events",
    link: "https://www.themetechmount.com/wordpress/presentup/advanced/tag/eventplanning/",
  },
  {
    id: 5,
    text: "Friends Celebrate",
    link: "https://www.themetechmount.com/wordpress/presentup/advanced/tag/party/",
  },
];
const MarqueBoxComponent = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="bg-gradient-to-r from-[#9FF0BA] to-[#C3A1F6] border border-black w-full h-[8vw] sm:h-[5vw]  overflow-hidden"
    >
      <style>
        {`
          @keyframes marquee {
            0% {
              transform: translateX(0%);
            }
            100% {
              transform: translateX(-50%);
            }
          }
        `}
      </style>
      <ul
        className="flex justify-around items-center text-black hover:animate-none h-full	"
        style={{
          display: "inline-flex",
          animation: isHovered ? "none" : "marquee 20s linear infinite",
        }}
      >
        {items.map((item) => (
          <li key={item.id} className="mx-4">
            <a
              href={item.link}
              className="text-black text-[2vw] font-medium hover:text-custom-purple whitespace-nowrap"
            >
              {item.text}
            </a>
          </li>
        ))}
        {items.map((item) => (
          <li
            key={`${item.id}-duplicate`}
            className="mx-4  text-[2vw]  whitespace-nowrap"
          >
            <a href={item.link} className="text-black hover:text-blue-700">
              {item.text}
            </a>
          </li>
        ))}
        {/* <li className="elementor-icon-list-item">
          <div className="tm-box-Title-link">Operation Methods</div>
        </li>

        <li className="elementor-icon-list-item">
          <div className="tm-box-Title-link">Wedding Planning</div>
        </li>
        <li className="elementor-icon-list-item">
          <div className="tm-box-Title-link">Corporate Events</div>
        </li>
        <li className="elementor-icon-list-item">
          <div className="tm-box-Title-link">Friends Celebrate</div>
        </li>
        <li className="elementor-icon-list-item">
          <div className="tm-box-Title-link">Birthday Party</div>
        </li>
        <li className="elementor-icon-list-item">
          <div className="tm-box-Title-link">Wedding Planning</div>
        </li>
        <li className="elementor-icon-list-item">
          <div className="tm-box-Title-link">Corporate Events</div>
        </li>
        <li className="elementor-icon-list-item">
          <div className="tm-box-Title-link">Friends Celebrate</div>
        </li>
        <li className="elementor-icon-list-item">
          <div className="tm-box-Title-link">Birthday Party</div>
        </li> */}
      </ul>
    </div>
  );
};

export default MarqueBoxComponent;
