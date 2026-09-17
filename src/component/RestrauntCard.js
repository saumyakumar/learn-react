const cardStyle = {
  border: "1px solid black",
  display: "flex",
  flexDirection: "column",
  width: "200px",
  maxHeight: "400px",
  minHeight: "200px",
  padding: "10px",
  cursor: "pointer",
};
const Card = ({ resData }) => {
  const { name, cuisines, costForTwo, cloudinaryImageId, avgRating } =
    resData.info;
  return (
    <div className="card" style={cardStyle}>
      <div className="card-image">
        <img
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
          src={
            "https://media-assets.swiggy.com/swiggy/image/upload/" +
            cloudinaryImageId
          }
        />
      </div>
      <div
        className="card-content"
        style={{ display: "flex", flexDirection: "column", marginTop: "5px" }}
      >
        <span>{name}</span>
        <span>{cuisines.join(", ")}</span>
        <span>{avgRating}</span>
        <span>{costForTwo}</span>
      </div>
    </div>
  );
};

export default Card;
