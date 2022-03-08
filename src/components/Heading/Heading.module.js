import React from "react";

import "./Heading.css";

const Heading = ({ text, cssClass = "default" }) => {
  return <h3 className={cssClass}>{text}</h3>;
};

export default Heading;
