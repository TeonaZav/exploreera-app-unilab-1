import { useState } from "react";
import styled from "styled-components";
import { useFlights } from "../../context/FlightContext";
import RangeSlider from "../RangeSlider";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";

const FilterSideBar = () => {
  const [stopsOpen, setStopsOpen] = useState(false);

  const { updateFlightStops } = useFlights();

  const handlStopChange = (event) => {
    const stop = parseInt(event.target.value, 10);
    updateFlightStops(stop, event.target.checked);
  };

  const toggleStops = () => {
    setStopsOpen(!stopsOpen);
  };

  return (
    <StyledSideBar>
      <StyledAside1>
        <h3>Cheapest</h3>
        <h3>Quickest</h3>
        <h3>best</h3>
      </StyledAside1>
      <StyledAside2>
        <StyledCeckboxHeader onClick={toggleStops}>
          <h4>Stops</h4>
          <FontAwesomeIcon
            icon={stopsOpen ? faChevronUp : faChevronDown}
            className="icon"
          />
        </StyledCeckboxHeader>
        {stopsOpen && (
          <StyledCheckBox>
            <div className="checkbox-field">
              <input type="checkbox" value="0" onChange={handlStopChange} />
              <label>Direct</label>
            </div>
            <div className="checkbox-field">
              <input type="checkbox" value="1" onChange={handlStopChange} />
              <label>One Stop</label>
            </div>
            <div className="checkbox-field">
              <input type="checkbox" value="2" onChange={handlStopChange} />
              <label>Two Stops</label>
            </div>
          </StyledCheckBox>
        )}
        <h4>Price</h4>
        <RangeSlider className="range" />
      </StyledAside2>
    </StyledSideBar>
  );
};

const StyledSideBar = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  h4 {
    font-size: 2rem;
    color: #424244;
    font-weight: 400;
  }

  range {
    width: 100%;
  }

  @media (min-width: 90em) {
    h4 {
      font-size: 2.4rem;
    }
  }
`;
const StyledAside1 = styled.div`
  width: 100%;
  height: 25rem;
  background-color: #ffffff;
  border-radius: 2rem;
  padding: 2rem 6rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  h3 {
    color: #424244;
    font-weight: 400;
    font-size: 2.4rem;
    padding-block: 1rem;
    &:not(:last-child) {
      border-bottom: 3px solid #ff6700;
    }
  }
  @media (min-width: 50em) {
    h3 {
      font-size: 2.4rem;
    }
  }
  @media (min-width: 90em) {
    h3 {
      font-size: 3rem;
    }
  }
`;
const StyledAside2 = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem 6rem;
  gap: 2.4rem;
  width: 100%;
  height: 100%;
  background-color: #ffffff;
  border-radius: 2rem;
`;

const StyledCheckBox = styled.div`
  display: flex;
  flex-direction: column;

  width: 100%;
  gap: 2rem;
  .checkbox-field {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;

    label {
      font-size: 2.4rem;
      color: #424244;
    }
    input {
      appearance: none;
      width: 5rem;
      height: 5rem;

      &:checked {
        background-color: #ff6700;
      }
    }
  }
`;
const StyledCeckboxHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  .icon {
    font-size: 3.2rem;
    color: #424244;
    cursor: pointer;
  }
`;
export default FilterSideBar;
