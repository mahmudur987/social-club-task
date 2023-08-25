import LeftSidebar from "@/components/Leftsidebar/LeftSidebar";
import RightSidebar from "@/components/RightSidebar/RightSidebar";
import React from "react";

const MessagePageLayout = () => {
  return (
    <main className="container flex justify-between">
      {/* leftSidebar */}
      <div className="min-h-screen w-1/4 flex justify-center ">
        <LeftSidebar />
      </div>
      {/* Right Sidebar */}

      <div className="w-3/4">
        <RightSidebar />
      </div>
    </main>
  );
};

export default MessagePageLayout;
