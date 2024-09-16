import SideMenuBar from "@/components/shared/SideMenuBar";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="flex col-span-2">
        <SideMenuBar />

        <div className="w-full p-5 ">{children}</div>
      </div>
    </>
  );
};

export default layout;
