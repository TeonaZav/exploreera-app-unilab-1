import { useState } from "react";
import { useFlights } from "../context/FlightContext";
import Box from "@mui/material/Box";
import Slider from "@mui/material/Slider";

const RangeSlider = () => {
  const { updatePriceRange } = useFlights();
  const [value, setValue] = useState([700, 3000]);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    updatePriceRange(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Slider
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        min={700}
        max={3000}
        step={50}
        sx={{
          color: "#C85100",
          "& .MuiSlider-thumb": {
            backgroundColor: "#FFFFFF",
          },
          "& .MuiSlider-track": {
            backgroundColor: "#C85100",
          },
          "& .MuiSlider-rail": {
            backgroundColor: "#e0e0e0",
          },
        }}
      />
    </Box>
  );
};

export default RangeSlider;
