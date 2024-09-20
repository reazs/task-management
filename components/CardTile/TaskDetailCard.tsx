import React from "react";
import Badge from "../shared/Badge";
import { Separator } from "../ui/separator";

const TaskDetailCard = () => {
  return (
    <div className=" space-y-3 my-5 p-3 border rounded-md shadow-sm">
      {/* what is the task about */}
      <div className="flex gap-2">
        <Badge className="bg-pink-400">Website</Badge>
        <Badge className="bg-emerald-400">Branding</Badge>
      </div>

      <p className="">😍 Flutter First</p>
      {/* how much progress  */}
      <progress
        className="progress progress-error "
        value="30"
        max="100"
      ></progress>
      <Separator />
      {/* who is working on task */}
      <p>Teams</p>
      <p>Anthony, Jeeshan, Reaz, Sador, Nadia</p>
      <div className="flex justify-end">
        <div className=" text-start ">
          <p className=" justify-between flex text-gray-400/70">
            <strong className=" text-muted-foreground/35">Started:</strong>
            September 6, 2024
          </p>
          <p className=" justify-between flex text-gray-400/70">
            <strong className=" text-muted-foreground/35">Goal:</strong>
            September 29, 2024
          </p>
        </div>
      </div>
    </div>
  );
};

export default TaskDetailCard;
