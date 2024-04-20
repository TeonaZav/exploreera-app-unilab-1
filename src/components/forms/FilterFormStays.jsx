import { useState, useRef } from "react";
import styled from "styled-components";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { useStays } from "../../context/StaysContext";
import SelectField from "./SelectField";
import Button from "../UI/Button";

const FilterFormStays = () => {
  const { dateRange, handleDateChange, handleDuration } = useStays();
  const [startDate, endDate] = dateRange;
  const [isOpen, setIsOpen] = useState(false);

  const onInputClick = () => {
    setIsOpen(true);
  };
  const onCalendarClose = () => {
    setIsOpen(false);
  };


  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted Dates:", startDate, endDate);
    handleDuration( startDate, endDate);
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <SelectField />
      <SelectField />
      <Wrapper>
        <Input
          type="text"
          value={`${
            startDate ? startDate.toLocaleDateString() : "Check-in"
          } - ${endDate ? endDate.toLocaleDateString() : "Check-out"}`}
          onClick={onInputClick}
          readOnly
        />
        {isOpen && (
          <StyledDatePicker
            selected={startDate}
            onChange={handleDateChange}
            startDate={startDate}
            endDate={endDate}
            selectsRange
            inline
            onClickOutside={onCalendarClose}
            onSelect={onCalendarClose}
          />
        )}
      </Wrapper>
      <Button
        type="submit"
        height="5rem"
        disabled={!startDate || !endDate || endDate < startDate}
      >
        Search
      </Button>
    </StyledForm>
  );
};

export const Input = styled.input`
  width: 100%;
  color: #424244;
  background-color: #ffffff;
  border-radius: 1rem;
  padding: 1.2rem 2rem;
  height: 100%;
  border: 1px solid #ff6600bd;
  @media (min-width: 50em) {
    border-radius: 2rem;
  }
`;

const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 6.4rem;

  @media (min-width: 50em) {
    width: calc((100% - 2rem) / 2);
  }
  @media (min-width: 90em) {
    width: 25%;
  }
`;
const StyledDatePicker = styled(DatePicker)`
  position: absolute;
  top: 10rem;
  left: 5rem;
  z-index: -1;
  width: 100%;
  border: none;
`;

export const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  font-size: 1.6rem;

  button {
    flex: 1;
    min-height: 6.4rem;
  }
  @media (min-width: 50em) {
    flex-direction: row;
    flex-wrap: wrap;
    font-size: 2rem;
    button {
      border-radius: 2rem;
    }
  }

  @media (min-width: 90em) {
  }
`;
export default FilterFormStays;
