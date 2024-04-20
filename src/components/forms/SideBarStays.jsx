import styled from "styled-components";

import { useStays } from "../../context/StaysContext";

const SideBarStays = () => {
  const { updateHotelStars } = useStays();

  const handleStarChange = (e) => {
    const { checked, value } = e.target;
    updateHotelStars(value, checked);
  };

  return (
    <StyledSideBar>
      <StyledAside>
        <h3>Filter by</h3>
        <StyledCeckboxHeader>
          <h4>Property rating</h4>
        </StyledCeckboxHeader>
        <StyledCheckBox>
          {[1, 2, 3, 4, 5].map((star, index) => (
            <div className="checkbox-field" key={index}>
              <input type="checkbox" value={star} onChange={handleStarChange} />
              <label key={star}> {star} Star</label>
            </div>
          ))}
        </StyledCheckBox>
      </StyledAside>
    </StyledSideBar>
  );
};

const StyledSideBar = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 2rem;

  h3 {
    color: #424244;
    font-size: 2rem;
    text-decoration: underline;
    text-decoration-color: #ff6700;
    text-underline-offset: 1rem;
    margin-bottom: 3rem;
  }
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

const StyledAside = styled.div`
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
  flex-direction: column-reverse;

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
export default SideBarStays;
