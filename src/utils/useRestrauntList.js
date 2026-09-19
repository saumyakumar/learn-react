import { useState, useEffect } from "react";
import { homeApi} from "../utils/constant.js";

const useRestrauntList = () => {
  const [renderRestList, setRenderRestList] = useState([]);
  const [filterResList, setFilterResList] = useState([]);

  useEffect(() => {
    getRestrauntList();
  }, []);

  const getRestrauntList = async () => {
    const data = await fetch(
        `${homeApi}`,
      );
      const json = await data.json();
      setRenderRestList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setFilterResList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants); 
  }

  return { renderRestList, filterResList, setFilterResList, setRenderRestList };
}

export default useRestrauntList;