import Image from "next/image";
import React from "react";

const Navbrand = () => {
  return (
    <div className="flex flex-row items-center ">
      <Image
        alt="log-img"
        width={44}
        height={44}
        src={"/task-management.png"}
      />
      <h3>TaskSnap</h3>
    </div>
  );
};

export default Navbrand;
