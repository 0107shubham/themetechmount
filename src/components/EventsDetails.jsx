import React from "react";
import { events } from "../Data";
import { useParams } from "react-router-dom";
import { Link, useNavigate } from "react-router-dom";
import Navigation from "./Navigation";

const EventsDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  console.log(id);
  const data = events.find((items) => items.id.toString() === id);

  const handleAllEvent = () => {
    navigate("/allEvents");
  };

  return (
    <div className="w-full">
      <div className="bg-black w-full">
        <Navigation />
      </div>
      <div className="w-full flex justify-center items-center h-[30vw] md:h-[20vw] bg-cover bg-[url('https://res.cloudinary.com/drvjsegeb/image/upload/v1717399420/slider_h7kdml.jpg')]">
        <p className="uppercase text-[5vw] text-white">Events</p>
      </div>
      <div className=" w-full px-[3vw] md:px-[20vw]">
        <button onClick={handleAllEvent}>
          <p>All Events</p>
        </button>
        <div>
          <img
            className="w-full aspect-video my-[2vw]"
            src={data.imageURL}
            alt={data.title}
          />
          <p className="text-[1.3vw] text-gray-900 first-letter:text-[4vw] first-letter:text-purple-600">
            The launch of new product, service is always a thrilling time for
            any organization. Contrary to popular belief, Lorem Ipsum is not
            simply random text. It has roots in a piece of classical Latin
            literature from 45 BC, making it over 2000 years old. Richard
            McClintock, a Latin professor at Hampden-Sydney College in Virginia,
            looked up one of the more obscure Latin words, consectetur, from a
            Lorem Ipsum passage.
          </p>
          <div className=" my-[2vw]">
            <h1 className="text-[2vw] text-gray-800 font-bold">
              Mauris laoreet dui eu tellus rhoncus
            </h1>
            <p className="text-[1.3vw] text-gray-900">
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source.Lorem Ipsum comes
              from sections 1.10.32 and 1.10.33 of “de Finibus Bonorum et
              Malorum” (The Extremes of Good and Evil) by Cicero.
            </p>
          </div>
          <div></div>
          <div className=" my-[2vw]">
            <h2 className="text-[2vw] text-gray-800 font-bold">
              Cras in justo in neque imperdiet gravida
            </h2>
            <p className="text-[1.3vw] text-gray-900">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
              eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam
              est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci
              velit, sed quia non numquam eius modi tempora incidunt ut labore
              et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima
              veniam, quis nostrum exercitationem ullam corporis suscipit
              laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem
              vel eum iure reprehenderit qui in ea voluptate velit esse quam
              nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo
              voluptas nulla pariatur
              <br />{" "}
              <spna className="mt-[2vw]">
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga.
              </spna>
            </p>
          </div>

          <div className="bg-white shadow-md flex justify-between h-[15vw] p-[2vw]">
            <div>
              <h1 className="text-[2vw] text-gray-800 font-bold">DETAILS</h1>
              <p className="text-[1.4vw] text-gray-800 font-medium">Date :</p>
              <p className="text-[1vw] text-gray-800 ">{data.date}</p>
              <p className="text-[1.4vw] text-gray-800 font-medium">Time :</p>
              <p className="text-[1vw] text-gray-800 ">{data.time}</p>
            </div>
            <div>
              <h1 className="text-[2vw] text-gray-800 font-bold">ORGANIZER</h1>
              <p className="text-[1vw] text-gray-800 ">
                ASTHON PORTER Music Association
              </p>
            </div>
          </div>
          <div className="bg-white shadow-md flex justify-between mt-[1vw]  h-[18vw]  p-[2vw]">
            <div>
              <h1 className="text-[1.4vw] text-gray-800 font-medium">VENUE</h1>
              {data.club && (
                <p className="text-[1vw] text-gray-800 my-[.5vw]">
                  {data.club}
                </p>
              )}
              <p className="text-[1vw] text-gray-800 my-[.5vw] ">
                {data.location}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventsDetails;
