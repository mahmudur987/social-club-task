import React from "react";
import img1 from "../../../public/images/Social_logo_1.png";
import img2 from "../../../public/images/person1.png";
import Image from "next/image";

import { BsThreeDots } from "react-icons/bs";
import { BiSearchAlt } from "react-icons/bi";
import { BsBell } from "react-icons/bs";
import { AiOutlineRocket } from "react-icons/ai";

const Header = () => {
  return (
    <div className="container navbar  flex justify-between gap-4">
      {/* navbar startr */}

      <div className="w-72 flex justify-between items-center">
        <p className="flex items-center ">
          <Image
            className="rounded-md"
            height={30}
            width={30}
            src={img1}
            alt=""
          />

          <a className="btn btn-ghost normal-case text-xl"> 1 Social Club</a>
        </p>
        <p>
          <BsThreeDots />
        </p>
      </div>

      {/* navbar middle with  search bar */}

      <div className="flex-1">
        <div className=" ps-4 flex items-center  ">
          <span className="text-2xl">
            <BiSearchAlt />
          </span>
          <input type="text" placeholder="Search" className="input border-0 " />
        </div>
      </div>

      {/* navbar end */}

      <div className="flex gap-8">
        <button className="flex gap-2 bg-yellow-400 btn">
          {" "}
          <span className="text-xl">
            <AiOutlineRocket />
          </span>{" "}
          Getting Started -0%
        </button>
        <span className="text-xl">
          <BsBell />
        </span>
        <p className="w-24 rounded-full">
          <Image width={24} height={24} alt="no image" src={img2} />
        </p>
      </div>
    </div>
  );
};

export default Header;
