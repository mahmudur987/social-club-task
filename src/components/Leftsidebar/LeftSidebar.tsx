import React from "react";
import { RiFeedbackLine } from "react-icons/ri";
import { BiMessageDetail } from "react-icons/bi";
import { FiUsers } from "react-icons/fi";
import { BiShoppingBag, BiPlus } from "react-icons/bi";
import { LiaGreaterThanSolid } from "react-icons/lia";
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

      <div className="w-60 flex flex-col justify-center gap-7 min-h-[250px]">
        {items.map((item, i) => (
          <div
            className={`flex gap-3 text-xl items-center font-bold px-4 py-2 rounded-md ${
              item.name === "Message" ? "bg-blue-800 text-white" : ""
            }`}
            key={i}
          >
            <span className="text-3xl">{item.icon}</span>
            <span>{item.name}</span>
          </div>
        ))}
      </div>

      {/* collections */}
      <div className="w-full flex flex-col items-center gap-5">
        <div className="w-8/12  flex justify-between items-center  text-2xl  my-10">
          <h1 className="font-bold">Collections</h1>

          <span>
            {" "}
            <BiPlus />{" "}
          </span>
        </div>
        <p className="w-7/12 flex justify-between items-center ">
          <span>Collection name one</span>
          <span>
            {" "}
            <LiaGreaterThanSolid />{" "}
          </span>{" "}
        </p>

        <div className="grid gap-2 my-5">
          {rooms.map((room, i) => (
            <p className="grid   border-l-4 border-indigo-500 px-2" key={i}>
              <span className="font-semibold"> {room.name} </span>
              <span className="text-sm"> {room.condition} </span>
            </p>
          ))}
        </div>

        <p className="w-7/12 flex justify-between items-center">
          <span>Collection name Two</span>
          <span>
            {" "}
            <LiaGreaterThanSolid />{" "}
          </span>{" "}
        </p>
        <p className="w-7/12 flex justify-between items-center">
          <span>Collection name Three</span>
          <span>
            {" "}
            <LiaGreaterThanSolid />{" "}
          </span>{" "}
        </p>
      </div>
    </div>
  );
};

export default LeftSidebar;
