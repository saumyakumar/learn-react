import Shimmer from "./Shimmer";
import useRestrauntMenu from "../utils/useRestrauntMenu";
const Restraunt = () => {
  const resData = useRestrauntMenu();

  return resData === null ? (
    <Shimmer />
  ) : (
    <>
      <div>{resData?.page_info?.pageTitle}</div>
      <div>{resData?.page_info.pageDescription}</div>
    </>
  );
};

export default Restraunt;
