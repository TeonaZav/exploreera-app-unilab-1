import { createContext, useContext, useState, useEffect } from "react";
import { calculateDateDifference } from "../utils/helpers";
const StaysContext = createContext();

export const StaysProvider = ({ children }) => {
  const [allStays, setAllStays] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedStars, setSelectedStars] = useState([]);
  const [selectedStay, setSelectedStay] = useState(null);
  const [dateRange, setDateRange] = useState([null, null]);
  const [stayDays, setStayDays] = useState(0);

  const fetchStays = async () => {
    try {
      const res = await fetch("/data/stays.json");
      const data = await res.json();
      setAllStays(data);
      setError(null);
    } catch (error) {
      console.log("Failed to fetch stays:", error);
      setError("Failed to load stays");
    } finally {
      setLoading(false);
    }
  };

  const fetchStayById = async (id) => {
    try {
      const res = await fetch("/data/stays.json");
      const data = await res.json();

      const stay = data.find((stay) => stay.id === +id);
      console.log(stay);
      if (!stay) {
        setError("No stay found");
        setSelectedStay(null);
      } else {
        console.log(stay);
        setSelectedStay(stay);
        setError(null);
      }
    } catch (error) {
      setError("Failed to load stay");
      setSelectedStay(null);
    }
  };

  useEffect(() => {
    fetchStays();
  }, []);

  const updateHotelStars = (star, isChecked) => {
    setSelectedStars((prevStars) => {
      const value = parseInt(star, 10);
      if (isChecked) {
        return prevStars.includes(value) ? prevStars : [...prevStars, value];
      } else {
        return prevStars.filter((s) => s !== value);
      }
    });
  };

  const handleDateChange = (dates) => {
    setDateRange(dates);
  };

  const handleDuration = (day1, day2) => {
    setStayDays(calculateDateDifference(day1, day2));
  };

  const stays = allStays.filter((stay) => {
    const starsMatch =
      selectedStars.length > 0 ? selectedStars.includes(stay.rating) : true;

    return starsMatch;
  });

  return (
    <StaysContext.Provider
      value={{
        stays,
        loading,
        error,
        updateHotelStars,
        fetchStayById,
        handleDuration,
        stayDays,
        dateRange,
        handleDateChange,
        selectedStay
      }}
    >
      {children}
    </StaysContext.Provider>
  );
};

export const useStays = () => useContext(StaysContext);
