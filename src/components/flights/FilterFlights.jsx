import { useFlights } from "../../context/FlightContext";

const FilterFlights = () => {
    const { updateFlightDate } = useFlights();
  return (
    <div>FilterFlights</div>
  )
}

export default FilterFlights