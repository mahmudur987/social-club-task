import React from "react";
import { RiFeedbackLine } from "react-icons/ri";
import { BiMessageDetail } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import { BiShoppingBag } from "react-icons/bi";
import { FaGreaterThan } from "react-icons/fa";
const LeftSidebar = () => {
  const items = [
    {
      name: "Feed",
      icon: <RiFeedbackLine />,
    },
    {
      name: "Message",
      icon: <BiMessageDetail />,
    },
    {
      name: "Members",
      icon: <FiUsers />,
    },
    {
      name: "Shop",
      icon: <BiShoppingBag />,
    },
  ];

  const rooms = [
    { name: "Room Name One", condition: "public" },
    { name: "Room Name Two", condition: "privet" },
    { name: "Room Name Three", condition: "secrate" },
  ];

  return (
    <div className="  w-full flex flex-col items-center ">
      {/* menu items */}

      <div className="w-60 flex flex-col justify-center gap-10 min-h-[250px]">
        {items.map((item, i) => (
          <div className="flex gap-5 text-xl items-center" key={i}>
            <span>{item.icon}</span>
            <span>{item.name}</span>
          </div>
        ))}
      </div>

      {/* collections */}
      <div className="w-full flex flex-col items-center gap-5">
        <h1 className=" w-9/12 text-start   text-xl font-bold my-10">
          collections
        </h1>
        <p className="w-9/12 flex justify-between items-center">
          <span>Collection name one</span>
          <span>
            {" "}
            <FaGreaterThan />{" "}
          </span>{" "}
        </p>

        <div className="grid gap-2 my-5">
          {rooms.map((room, i) => (
            <p className="grid   border-l-4 border-indigo-500 px-2" key={i}>
              <span> {room.name} </span>
              <span> {room.condition} </span>
            </p>
          ))}
        </div>

        <p className="w-9/12 flex justify-between items-center">
          <span>Collection name Two</span>
          <span>
            {" "}
            <FaGreaterThan />{" "}
          </span>{" "}
        </p>
        <p className="w-9/12 flex justify-between items-center">
          <span>Collection name Three</span>
          <span>
            {" "}
            <FaGreaterThan />{" "}
          </span>{" "}
        </p>
      </div>
    </div>
  );
};

export default LeftSidebar;
