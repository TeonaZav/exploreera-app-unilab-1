import { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import styled from "styled-components";

import toast, { Toaster } from "react-hot-toast";
import Button from "./../UI/Button";
import SelectField from "./../forms/SelectField";
import { dateUpValidationSchema } from "./auth/Schema";
import { useFlights } from "../../context/FlightContext";

const FilterForm = () => {
  const [selectedDate, setSelectedDate] = useState("");
  const { updateFlightDate } = useFlights();

  const handleDateChange = (event) => {
    setSelectedDate(event.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateFlightDate(selectedDate);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <SelectField />
      <SelectField />

      <input type="date" value={selectedDate} onChange={handleDateChange} />

      <Button type="submit" height="5rem">
        Search
      </Button>
    </StyledForm>
  );
};

export const Input = styled.input`
  width: 100%;
  color: #424244;
  background-color: #ffffff;
  border-radius: 0.4rem;
  padding: 1.2rem 2rem;
  height: 5rem;
  border: 1px solid #ff6600bd;
  @media (min-width: 50em) {
    height: 5.4rem;
  }
`;

export const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  font-size: 1.6rem;

  input[type="date"] {
    width: 100%;
    height: 7rem;
    border-radius: 1.2rem;
  }
  button {
    flex: 1;
    height: 7rem;
  }
  @media (min-width: 50em) {
    flex-direction: row;
    flex-wrap: wrap;
    font-size: 2rem;
    input[type="date"] {
      width: 100%;
    }
  }

  @media (min-width: 90em) {
    input[type="date"] {
      width: 25%;
      height: 8.4rem;
      border-radius: 2rem;
    }
  }
`;

export default FilterForm;
