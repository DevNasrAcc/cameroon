import React from "react";

import "./SubHeading.css";

const SubHeading = ({
  text,
  parentClass = false,
  cssClass = "default-sub",
}) => {
  return (
    <div className="center">
      <h5 className={`${cssClass} ${parentClass ? "content" : ""}`}>{text}</h5>
    </div>
  );
};

export default SubHeading;
