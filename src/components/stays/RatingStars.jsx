import { useState } from "react";
import Rating from "@mui/material/Rating";
import StarIcon from "@mui/icons-material/Star";
import StarBorderIcon from "@mui/icons-material/StarBorder";

function RatingStars({ rating }) {
  const [value, setValue] = useState(rating);

  return (
    <Rating
      name="customized-rating"
      defaultValue={rating}
      value={value}
      precision={1}
      icon={
        <StarIcon
          fontSize="inherit"
          style={{ color: "#FF6700", fontSize: "2.4rem" }}
        />
      }
      emptyIcon={
        <StarBorderIcon style={{ color: "#FF6700", fontSize: "2.4rem" }} />
      }
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    />
  );
}
export default RatingStars;
