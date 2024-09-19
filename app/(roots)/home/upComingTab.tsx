import React from "react";

const UpComingTab = () => {
  return (
    <>
      <input
        type="radio"
        name="my_tabs_1"
        role="tab"
        className="tab"
        aria-label="Up Comming"
      />
      <div role="tabpanel" className="tab-content p-10">
        Tab content 3
      </div>
    </>
  );
};

export default UpComingTab;
