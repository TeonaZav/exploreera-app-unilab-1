import { createContext, useContext, useState, useEffect } from "react";

const StaysContext = createContext();

export const StaysProvider = ({ children }) => {
  const [allStays, setAllStays] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedStars, setSelectedStars] = useState([]);

  const fetchStays = async () => {
    try {
      const res = await fetch("./data/stays.json");
      const data = await res.json();
      console.log(data);
      setAllStays(data);
      setError(null);
    } catch (error) {
      console.log("Failed to fetch stays:", error);
      setError("Failed to load stays");
    } finally {
      setLoading(false);
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
      }}
    >
      {children}
    </StaysContext.Provider>
  );
};

export const useStays = () => useContext(StaysContext);
