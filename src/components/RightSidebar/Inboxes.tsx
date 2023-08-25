import React from "react";
import img1 from "../../../public/images/person1.png";
import Image from "next/image";
const Inboxes = () => {
  const inboxes1 = [
    {
      name: "Rechard Nelson",
      picture: img1,
      active: true,
      meaage: "how are you may boy 1",
    },
    {
      name: "Rechard Nelson",
      picture: img1,
      active: true,
      meaage: "how are you may boy 2",
    },
    {
      name: "Rechard Nelson",
      picture: img1,
      active: false,
      meaage: "how are you may boy 3",
    },
  ];
  const inboxes2 = [
    {
      name: "Rechard Nelson",
      picture: img1,
      active: true,
      meaage: "how are you may boy",
    },
    {
      name: "Rechard Nelson",
      picture: img1,
      active: false,
      meaage: "how are you may boy",
    },
    {
      name: "Rechard Nelson",
      picture: img1,
      active: false,
      meaage: "how are you may boy",
    },
    {
      name: "Rechard Nelson",
      picture: img1,
      active: false,
      meaage: "how are you may boy",
    },
  ];

  return (
    <div>
      {/* inbox1 */}
      <div className="flex flex-col gap-5">
        {inboxes1.map((x, i) => (
          <div className="flex gap-3" key={i}>
            <div className={`avatar ${x.active ? "online" : "offline"}`}>
              <div className=" rounded-md">
                <Image height={25} width={25} alt="image" src={x.picture} />
              </div>
            </div>
            <div>
              <p className="font-bold"> {x.name}</p>
              <p className="text-sm"> {x.meaage}</p>
            </div>
            <div className="flex flex-1 justify-end items-end">
              <p className="font-semibold text-sm mr-2"> {i + 1} h</p>
            </div>
          </div>
        ))}
      </div>
      {/* inbox1 */}

      <p className="my-8">other</p>
      <div className="flex flex-col gap-5">
        {inboxes2.map((x, i) => (
          <div className="flex gap-3" key={i}>
            <div className={`avatar ${x.active ? "online" : "offline"}`}>
              <div className=" rounded-md">
                <Image height={25} width={25} alt="image" src={x.picture} />
              </div>
            </div>
            <div>
              <p className="font-bold"> {x.name}</p>
              <p className="text-sm"> {x.meaage}</p>
            </div>
            <div className="flex flex-1 justify-end items-end">
              <p className="font-semibold text-sm mr-2"> {i + 1} h</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Inboxes;
