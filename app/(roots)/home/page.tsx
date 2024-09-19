import { Button } from "@/components/ui/button";
import { AlignLeft, Plus, SlidersHorizontal } from "lucide-react";
import React from "react";
import AllTab from "./allTab";
import OnGoingTap from "./onGoingTap";
import UpComingTab from "./upComingTab";
import CompletedTab from "./completedTab";

const page = () => {
  return (
    <div className="">
      <div className="flex justify-between">
        <h1 className="text-2xl font-medium">Tasks</h1>
        <button className="btn btn-outline ">
          {" "}
          <Plus /> New Task
        </button>
      </div>
      <div className="mt-10  justify-between items-top">
        <div role="tablist" className=" tabs tabs-bordered">
          <AllTab />

          <OnGoingTap />

          <UpComingTab />

          <CompletedTab />
        </div>
      </div>
    </div>
  );
};

export default page;
