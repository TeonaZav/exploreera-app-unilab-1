import { useState } from "react";
import styled from "styled-components";

import Select from "react-select";

function SelectField() {
  const [selected, setSelected] = useState(null);

  function handleChange(selectedValue) {
    setSelected(selectedValue);
  }
  const options = [
    { value: "chocolate", label: "Chocolate" },
    { value: "strawberry", label: "Strawberry" },
    { value: "vanilla", label: "Vanilla" },
  ];
  return (
    <SelectStyle className="react-select">
      <Select
        value={selected}
        onChange={handleChange}
        options={options}
        className="react-select-container"
        classNamePrefix="react-select"
        theme={(theme) => ({
          ...theme,
          borderRadius: 0,
          colors: {
            ...theme.colors,
            primary25: "#ffffff",
            neutral50: "#424244",
            neutral80: "#424244",
            primary: "#ffffff",
          },
        })}
      />
    </SelectStyle>
  );
}
const SelectStyle = styled.div`
  width: 100%;

  -webkit-box-shadow: none;

  .react-select__control {
    width: 100%;
    height: 100%;
    font-size: 2rem;
    font-weight: 400;
    border-radius: 1.2rem;
    border: 1px solid #ff6700;
    background-color: #ffffff;
    color: #424244;
    cursor: pointer;

    @media (min-width: 50em) {
      border-radius: 2rem;
    }
  }

  .react-select__indicator-separator {
    display: none;
  }

  .react-select__option {
    border-bottom: 1px solid #42424452;
    cursor: pointer;
    color: #424244;
  }

  @media (min-width: 50em) {
    width: calc((100% - 2rem) / 2);
  }
  @media (min-width: 90em) {
    width: 25%;
  }
`;

export default SelectField;
