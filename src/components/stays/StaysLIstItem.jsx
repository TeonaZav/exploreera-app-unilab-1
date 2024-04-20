import { NavLink } from "react-router-dom";
import styled from "styled-components";

import Button from "./../UI/Button";
import RatingStars from "./RatingStars";

const StaysListItem = ({
  id,
  name,
  location,
  rating,
  price,
  amenities,
  description,
  images,
}) => {
  return (
    <NavLink to={`/stay/${id}`}>
      <StyledStay>
        <StyledFigure>
          <img src={images[0]} alt={name} />
        </StyledFigure>
        <StylefInfoContainer>
          <StyledInfo>
            <StyledInfo1>
              <h3>{name}</h3>
              <span className="address">
                {location.city}, {location.country}
              </span>
              <p>{location.address}</p>
              <p>{description}</p>
            </StyledInfo1>
            <StyledInfo2>
              <p>Rating:</p>
              <RatingStars rating={rating} />
              <p>
                Price: <span className="price">{price}$</span>
              </p>
            </StyledInfo2>
          </StyledInfo>
          <Button>Show details</Button>
        </StylefInfoContainer>
      </StyledStay>
    </NavLink>
  );
};

const StyledStay = styled.li`
  height: 42rem;

  background-color: #ffffff;
  border-radius: 1.2rem;
  padding: 1.2rem;
  font-size: 1.2rem;
  box-shadow: rgba(0, 0, 0, 0.021) 0px 1px 2px 0px;
  display: flex;
  justify-content: center;
  align-items: stretch;
  gap: 2rem;

  @media (min-width: 50em) {
    padding: 1.2rem 2rem;
    height: 30rem;
  }

  @media (min-width: 90em) {
    border-radius: 2rem;
    padding: 4rem 3rem;
    flex-direction: row;
    align-items: center;
    font-size: 1.6rem;
    height: 36.5rem;
  }
  @media (max-width: 400px) {
    flex-direction: column;
    height: 100%;
  }
`;

const StyledFigure = styled.figure`
  width: 35%;

  height: 100%;
  border-radius: 1.2rem;
  overflow: hidden;
  background-color: black;
  flex-grow: 1;
  flex-shrink: 0;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media (min-width: 50em) {
    border-radius: 2rem;
  }

  @media (min-width: 90em) {
    border-radius: 2rem;
  }
  @media (max-width: 400px) {
    width: 100%;
    height: 35%;
  }
`;

const StylefInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 0.8rem;
  justify-content: space-between;
  font-weight: 400;
  font-size: inherit;
  h3 {
    color: #424244;
    font-size: 2rem;
  }

  .address {
    font-size: 1.6rem;
    color: #424244cc;
  }

  p {
    color: #424244cc;
  }

  button {
    width: 100%;
    height: 4.4rem;
    padding: 1rem;
  }

  @media (min-width: 50em) {
    button {
      height: 5.4rem;
      font-size: 2rem;
    }

    h3 {
      font-size: 2.4rem;
    }

    .address {
      font-size: 2rem;
    }
  }

  @media (min-width: 90em) {
    h3 {
      font-size: 3.2rem;
    }

    .address {
      font-size: 2.2rem;
    }
  }
`;

const StyledInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 1rem;

  @media (min-width: 90em) {
    flex-direction: row;
  }
`;

const StyledInfo1 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;

  @media (min-width: 90em) {
    width: 70%;
  }
`;

const StyledInfo2 = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;
  .price {
    font-size: 2rem;
    color: black;
    font-weight: 500;
  }
  @media (min-width: 90em) {
    align-items: flex-end;
    gap: 2rem;
  }
`;

export default StaysListItem;
