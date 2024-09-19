import { SearchIcon, UserIcon } from "lucide-react";
import React from "react";
import { Separator } from "../ui/separator";

const TaskSearchInput = () => {
  return (
    <>
      <div className="md:p-5 px-5  flex  justify-between items-center  pb-3">
        <label className="text-slate-400 rounded-md input input-bordered md:min-w-[50%] flex items-center gap-2">
          <SearchIcon className=" " />
          <input type="text" className="grow" placeholder="Search" />
          <kbd className="kbd kbd-sm">⌘</kbd>
          <kbd className="kbd kbd-sm">K</kbd>
        </label>
        <div className=" rounded-full border p-1 cursor-pointer">
          <UserIcon />
        </div>
      </div>
      <Separator className=" " />
    </>
  );
};

export default TaskSearchInput;
