import { createContext, useContext, useState, useEffect } from "react";

const FlightsContext = createContext();

export const FlightsProvider = ({ children }) => {
  const [allFlights, setAllFlights] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedStops, setSelectedStops] = useState([]);
  const [priceRange, setPriceRange] = useState([700, 3000]);

  const fetchFlights = async () => {
    try {
      const res = await fetch("./data/flights.json");
      const data = await res.json();
      setAllFlights(data);
      setError(null);
    } catch (error) {
      console.log("Failed to fetch flights:", error);
      setError("Failed to load flights");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFlights();
  }, []);

  const updateFlightDate = (newDate) => {
    setSelectedDate(newDate);
  };

  const updateFlightStops = (stop, isChecked) => {
    setSelectedStops((prevStops) => {
      const stopValue = parseInt(stop, 10);
      if (isChecked) {
        return prevStops.includes(stopValue)
          ? prevStops
          : [...prevStops, stopValue];
      } else {
        return prevStops.filter((s) => s !== stopValue);
      }
    });
  };

  const updatePriceRange = (range) => {
    setPriceRange(range);
  };

  const flights = allFlights.filter((flight) => {
    const dateMatches = selectedDate
      ? flight.takeOff.split("T")[0] === selectedDate
      : true;
    const stopsMatch =
      selectedStops.length > 0 ? selectedStops.includes(flight.stops) : true;
    const priceMatch =
      flight.price >= priceRange[0] && flight.price <= priceRange[1];
    return dateMatches && stopsMatch && priceMatch;
  });
  return (
    <FlightsContext.Provider
      value={{
        flights,
        loading,
        error,
        updateFlightDate,
        updateFlightStops,
        updatePriceRange,
      }}
      
    >
      {children}
    </FlightsContext.Provider>
  );
};

export const useFlights = () => useContext(FlightsContext);
