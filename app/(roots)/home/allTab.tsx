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
          <div>
            <div className=" shadow-sm px-2 border flex justify-between items-center p-1 rounded-md bg-white text-primary">
              <p> On Going</p>
              <div className=" flex items-center justify-center border rounded-full w-8 h-8 bg-gray-300 white">
                3
              </div>
            </div>
            {/* cards */}
            <div className="my-5 p-3 border rounded-md shadow-sm">
              <div className="flex gap-2">
                <p className="bg-red-400/20 text-red-400/80 rounded-md p-1">
                  Website
                </p>
                <p className="bg-emerald-400/20 text-emerald-400/80 rounded-md p-1">
                  Branding
                </p>
              </div>
            </div>
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
