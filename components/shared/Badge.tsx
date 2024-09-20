import { cn } from "@/lib/utils";
import { BadgeT } from "@/types";
import React from "react";

const Badge = ({ className, children }: BadgeT) => {
  return (
    <p
      className={cn(
        className,

        " rounded-sm p-1 bg-opacity-30 inline-block shadow-sm"
      )}
    >
      {children}
    </p>
  );
};

export default Badge;
