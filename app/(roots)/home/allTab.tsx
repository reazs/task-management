import TaskDetailCard from "@/components/CardTile/TaskDetailCard";
import Badge from "@/components/shared/Badge";
import { Progress } from "@/components/ui/progress";
import React from "react";

const AllTab = () => {
  return (
    <>
      <input
        type="radio"
        name="my_tabs_1"
        role="tab"
        className="tab"
        aria-label="All"
      />
      <div role="tabpanel" className="tab-content py-5">
        <div className="grid md:grid-cols-3 grid-cols-2 gap-1">
          {/* on going section in all */}
          <div className="">
            <div className=" shadow-sm px-2 border flex justify-between items-center p-1 rounded-md bg-white text-primary">
              <p> On Going</p>
              <div className=" flex items-center justify-center border rounded-full w-8 h-8 bg-gray-300 white">
                3
              </div>
            </div>
            {/* cards */}
            <TaskDetailCard />  
          </div>
          {/* Upcoming section */}
          <div>
            <div className=" shadow-sm px-2 border flex justify-between items-center p-1 rounded-md bg-white text-primary">
              <p> In Progress</p>
              <div className=" flex items-center justify-center border rounded-full w-8 h-8 bg-gray-300 white">
                14
              </div>
            </div>
          </div>

          {/* Completed section */}
          <div>
            <div className=" shadow-sm px-2 border flex justify-between items-center p-1 rounded-md bg-white text-primary">
              <p> Completed</p>
              <div className=" flex items-center justify-center border rounded-full w-8 h-8 bg-gray-300 white">
                33
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AllTab;
