import React from "react";

import "./Label.css";

const Label = ({ text, cssClass = "default-label", size }) => {
  return (
    <p className={cssClass} style={{ fontSize: size }}>
      {text}
    </p>
  );
};

export default Label;
