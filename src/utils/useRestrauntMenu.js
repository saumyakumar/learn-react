import { useState, useEffect } from "react";
export default function useRestrauntMenu() {
  const [resData, setResdata] = useState(null);

  useEffect(() => {
    fetchResData();
  }, []);

  const fetchResData = async () => {
    const data = await fetch(
      "https://www.zomato.com/webroutes/getPage?page_url=/bangalore/nagarjuna-since-1984-residency-road-bangalore/order&location=&isMobile=0",
    );

    const json = await data.json();
    setResdata(json);
    console.log("json", json);
  };
  return resData;
}
