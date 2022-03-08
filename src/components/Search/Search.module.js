import React from "react";

import "./Search.css";
import Input from "../Input/Input.module";

const Search = ({ width, height }) => {
  return (
    <Input
      placeholder="Search..."
      valueName="Search"
      type="string"
      width={width}
      height={height}
      name={"search"}
    />
  );
};

export default Search;
