import { filterBtnText,homeApi} from "../utils/constant.js";
import SearchBar from "./Searchbar.js";
import RestrauntCard from "./RestrauntCard.js";
import FilterBtn from "./Button.jsx";
import Shimmer from "./Shimmer.js";
import { useState, useEffect } from "react";
import {Link} from "react-router-dom";

const Body = () => {
  const [renderRestList, setRenderRestList] = useState([]);
  const [filterResList, setFilterResList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      `${homeApi}`,
    );
    const json = await data.json();
    console.log(
      "fetchData",
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants,
    );
    setRenderRestList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants,
    );
    setFilterResList(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants,
    );
  };
  const handleClick = () => {
    setFilterResList(renderRestList?.filter((res) => res.info.avgRating > 4.5));
  };
  const handleSearch = (searchedText) => {
    setFilterResList(
      renderRestList.filter((item) =>
        item.info.name.toLowerCase().includes(searchedText.toLowerCase()),
      ),
    );
  };


    return filterResList?.length === 0 ? <Shimmer /> : (
      <>
        <div className="searchbar-container">
          <SearchBar handleSearch={handleSearch} />
          <FilterBtn text={filterBtnText} handleClick={handleClick} />
        </div>
        <div className="card-container">
          {filterResList.map((resData) => (
            <Link key={resData.info.id} to="/restraunt/123"><RestrauntCard key={resData.info.id} resData={resData} /></Link>
          ))}
        </div>
      </>
    );
  };

  export default Body;