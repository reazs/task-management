import React from "react";
import { Separator } from "../ui/separator";
import Navbrand from "./Navbrand";
import SideMenuItems from "../SideMenuItems";

const SideMenuBar = () => {
  return (
    <div className="md:block hidden min-w-72    min-h-screen border-r p-5">
      <Navbrand />
      <Separator className="my-7 " />
      <SideMenuItems />
    </div>
  );
};

export default SideMenuBar;
