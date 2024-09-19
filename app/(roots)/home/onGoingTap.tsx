import React from "react";

const OnGoingTap = () => {
  return (
    <>
      <input
        type="radio"
        name="my_tabs_1"
        role="tab"
        className="tab"
        aria-label="On Going"
        defaultChecked
      />
      <div role="tabpanel" className="tab-content p-10">
        Tab content 2
      </div>
    </>
  );
};

export default OnGoingTap;
