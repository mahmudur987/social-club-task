import React from "react";
import Inboxes from "./Inboxes";
import MessageDetails from "./MessageDetails";

const RightSidebar = () => {
  return (
    <div>
      <div className="flex justify-between p-5">
        <h1 className="text-2xl font-bold">Message</h1>
        <button>New chat</button>
      </div>
      <div className="flex">
        {/* inbox */}
        <div className="w-1/3">
          <p className="flex  gap-9">
            <button className="bg-gray-300 p-1 rounded-md">Inbox</button>
            <button>Groups</button>
            <button className="flex-1">Search</button>
          </p>

          <p className="flex justify-between my-10 px-3">
            <span>New</span>
            <span className="text-lg font-bold text-blue-600">
              Mark all as read
            </span>
          </p>

          <Inboxes />
        </div>
        {/* message */}
        <div className="w-2/3 px-5 shadow-xl">
          <MessageDetails />
        </div>
      </div>
    </div>
  );
};

export default RightSidebar;
