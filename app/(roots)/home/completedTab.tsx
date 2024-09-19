import React from "react";

const CompletedTab = () => {
  return (
    <>
      <input
        type="radio"
        name="my_tabs_1"
        role="tab"
        className="tab"
        aria-label="Completed"
      />
      <div role="tabpanel" className="tab-content p-10">
        Tab content 3
      </div>
    </>
  );
};

export default CompletedTab;
