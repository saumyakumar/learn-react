import Button from "./Button";
import { useState } from "react";
const SeachBar = ({ handleSearch }) => {
  const [searchedtext, updateSearchText] = useState("");
  return (
    <div className="search-bar">
      <input
        type="text"
        placeholder="Search for a food item"
        value={searchedtext}
        onChange={(e) => {
          updateSearchText(e.target.value);
        }}
      />
      <Button text={"Search"} handleClick={() => handleSearch(searchedtext)} />
    </div>
  );
};

export default SeachBar;
