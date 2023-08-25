import React from "react";
import img1 from "../../../public/images/person1.png";
import Image from "next/image";

import {
  AiOutlinePlus,
  AiOutlineVideoCamera,
  AiOutlinePhone,
  AiOutlineDown,
} from "react-icons/ai";
import { FiSend } from "react-icons/fi";
import { GrUserAdd } from "react-icons/gr";
import { AiOutlineFileGif, AiOutlineSmile } from "react-icons/ai";

const MessageDetails = () => {
  return (
    <div>
      {/* top div */}
      <div className="flex justify-between items-center w-full px-5">
        {/* profile div */}
        <div className="flex items-center gap-2">
          <div className="avatar online">
            <div className="rounded-md">
              <Image width={35} height={35} alt="no image" src={img1} />
            </div>
          </div>

          <h2 className="font-bold">Rechared nilson</h2>
          <p>
            <AiOutlineDown />
          </p>
        </div>
        {/* right icon */}
        <div className="flex gap-5 text-2xl text-gray-500">
          <p>
            {" "}
            <GrUserAdd />{" "}
          </p>
          <p>
            <AiOutlineVideoCamera />
          </p>
          <p>
            <AiOutlinePhone />
          </p>
        </div>
      </div>

      {/* message div */}

      <div className="w-1/2 my-3 py-3">
        <p>Need to talk some talk some thing about importent</p>
      </div>

      <div className=" flex flex-col  items-end">
        <div className="w-1/2 flex flex-col items-end text-end gap-5">
          <p className="flex gap-2 items-end">
            <span className="text-gray-500 text-sm ">1.10pm .</span>
            <span className="font-bold">Me</span>
          </p>
          <p> Lorem ipsum dolor sit amet consectetur </p>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus,
            ea.
          </p>
        </div>
      </div>

      <div className="flex items-center  gap-2 my-5">
        <div className="avatar online">
          <div className="rounded-md">
            <Image width={30} height={30} alt="no image" src={img1} />
          </div>
        </div>

        <h2 className="font-bold text-lg">Rechared nilson</h2>

        <p className="text-sm text-gray-500">11.10 pm</p>
      </div>

      <div className="flex flex-col gap-5 mx-3">
        <p>Lorem ipsum dolor sit amet.</p>
        <p>Lorem ipsum dolo</p>
        <p>Lorem ipsum dolo Lorem ipsum dolor sit amet.</p>
      </div>
      {/* TODAY */}

      <p className="text-center my-8 ">Today</p>

      <div className="flex justify-end">
        <div className="w-1/2 text-end flex flex-col gap-5">
          <p className="flex gap-2 justify-end ">
            <span>1.10pm</span>
            <span className="font-bold">Me</span>
          </p>
          <p>Lorem, ipsum dolor.</p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>

          <p>Lorem ipsum dolor, sit amet consectetur adipisicing. </p>
        </div>
      </div>

      <p className="text-end my-3 text-sm ">
        Seen by <span className="font-semibold text-lg">Rechard </span>
      </p>

      <div className="p-4">
        <div className="bg-white p-4 rounded shadow">
          <div className="mt-2 flex items-center gap-3">
            <span>
              <AiOutlinePlus />{" "}
            </span>
            <span>
              <AiOutlineFileGif />{" "}
            </span>
            <span> @ </span>
            <p className=" flex flex-grow bg-slate-200 rounded-md items-center p-2">
              <input
                type="text"
                className="flex-grow border-0 rounded  mr-2 bg-slate-200"
                placeholder="Type your message..."
              />
              <span>
                {" "}
                <AiOutlineSmile />{" "}
              </span>
            </p>
            <button className=" px-4 py-2 rounded">
              {" "}
              <FiSend />{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageDetails;
