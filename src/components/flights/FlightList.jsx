import { useState, useEffect } from "react";
import styled from "styled-components";
import FlightsListItem from "./FlightsListItem";
import { useFlights } from "../../context/FlightContext";
const FlightList = () => {
  const { flights, loading, error } = useFlights();

  if (loading) return <p>Loading...</p>;
  if (error)
    return (
      <StyledErrorMessage>
        {error || "No flights available for the selected date."}
      </StyledErrorMessage>
    );

  return (
    <>
      <StyledList>
        {flights.length > 0 ? (
          flights.map((flight) => (
            <FlightsListItem key={flight.id} {...flight} />
          ))
        ) : (
          <StyledErrorMessage>
            {error || "No flights available for the selected date."}
          </StyledErrorMessage>
        )}
      </StyledList>
    </>
  );
};

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const StyledErrorMessage = styled.p`
  font-size: 1.8rem;
  color: red;
  font-weight: 500;
  padding: 1.5rem;
  background-color: #ed0f0f36;
  border-radius: 1rem;

  margin-top: 2.4rem;
  line-height: 2rem;
`;
export default FlightList;
