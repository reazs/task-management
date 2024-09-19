import Navbar from "@/components/shared/Navbar";
import SideMenuBar from "@/components/shared/SideMenuBar";
import TaskSearchInput from "@/components/shared/TaskSearchInput";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div className="flex col-span-2 h-screen">
        {/* Make SideMenuBar sticky */}
        <div className="sticky top-0 h-screen overflow-y-auto scrollbar-none border-r">
          <SideMenuBar />
        </div>

        <div className="flex flex-col w-full">
          <div className="md:hidden flex">
            <Navbar />
          </div>

          {/* Make TaskSearchInput sticky */}
          <div className="sticky top-0 z-10 bg-white">
            <TaskSearchInput />
          </div>

          <div className="flex">
            {/* Main content that should scroll */}
            <div className="p-5 w-full h-full">{children}</div>

            {/* Right Sidebar recent activity */}
            <div className="lg:block hidden w-[200px] h-[864px] border-l sticky top-0 self-start">
              my name
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Layout;
