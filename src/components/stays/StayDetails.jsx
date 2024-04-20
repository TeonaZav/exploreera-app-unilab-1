import styled from "styled-components";
import { useMediaQuery } from "react-responsive";
import { useStays } from "../../context/StaysContext";

import RatingStars from "./RatingStars";
import Button from "../UI/Button";

const StayDetails = ({
  name,
  location,
  rating,
  price,
  description,
  images,
}) => {
  const isBigScreen = useMediaQuery({ query: "(min-width: 90em)" });

  const { stayDays } = useStays();

  console.log(stayDays);
  return (
    <StyledDetails>
      <StyledInfo>
        <StyledAddressCt>
          <h3>{name}</h3>
          <p>
            {location.address}, {location.city}, {location.country}
          </p>
        </StyledAddressCt>
        <StyledRatingCt>
          <p>Rating:</p>
          <RatingStars rating={rating} />
        </StyledRatingCt>
      </StyledInfo>
      <StyledGallery>
        {images.slice(0, isBigScreen ? 7 : 3).map((image, index, arr) => {
          return (
            <figure
              className={`photo photo-${index} ${
                index === arr.length - 1 &&
                images.length > arr.length &&
                "more-photos"
              }`}
              key={index}
            >
              <img src={image} alt={`${name} - image ${index + 1}`} />
              <div className="overlay">
                + {images.length - arr.length} Photos
              </div>
            </figure>
          );
        })}
      </StyledGallery>
      <StyledPriceButtonContainer>
        <StyledPriceCt>
          <div className="price">Price: {price}$</div>
          <div className="price">
            Total price: {stayDays ? price * stayDays : price}$
          </div>
        </StyledPriceCt>

        <Button>Book now</Button>
      </StyledPriceButtonContainer>
      <p>{description}</p>
    </StyledDetails>
  );
};

const StyledDetails = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  font-size: 1.4rem;
  @media (min-width: 50em) {
    font-size: 1.8rem;
  }
`;
const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  color: #424244;

  h3 {
    font-size: 2rem;
  }

  @media (min-width: 50em) {
    h3 {
      font-size: 2.8rem;
    }
  }
  @media (min-width: 90em) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const StyledAddressCt = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const StyledRatingCt = styled.div`
  display: flex;
  flex-direction: column;

  gap: 1rem;
  @media (min-width: 90em) {
    align-items: flex-end;
  }
`;

const StyledGallery = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 1.6rem;
  width: 100%;
  aspect-ratio: 340 / 290;
  .photo {
    position: relative;
    width: 100%;
    overflow: hidden;
    border-radius: 1rem;
    cursor: pointer;
  }

  .photo-0 {
    grid-row: 1 / span 2;
    grid-column: 1 / span 2;
  }
  .photo-1 {
    grid-column: 1;
    grid-row: 3 / span 1;
  }
  .photo-2 {
    grid-column: 2;
    grid-row: 3 / span 1;
  }

  .photo img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.3s ease;
  }

  .photo:hover img {
    transform: scale(1.1);
  }
  .more-photos {
    position: relative;
  }

  .more-photos .overlay {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .overlay {
    width: 100%;
    height: 100%;
    font-size: 1.8rem;
    position: absolute;
    top: 0;
    left: 0;
    background: rgba(0, 0, 0, 0.6);
    color: white;
    display: none;
  }
  @media (min-width: 50em) {
    aspect-ratio: 720 /650;
  }
  @media (min-width: 90em) {
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: repeat(3, 1fr);
    aspect-ratio: 1180 / 637;

    .photo-0 {
      grid-row: 1 / span 2;
      grid-column: 1 / span 3;
    }

    .photo-1 {
      grid-column: 4 / span 5;
      grid-row: 1;
    }

    .photo-2 {
      grid-column: 4 / span 5;
      grid-row: 2;
    }
    .more-photos {
      grid-column: 4 / span 5;
    }
  }
`;
const StyledPriceButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.6rem;
  height: 10.2rem;

  button {
    flex: 1;
    height: 4.3rem;
  }

  @media (min-width: 90em) {
    height: 4.3rem;
    flex-direction: row;
  }
`;
const StyledPriceCt = styled.div`
  display: flex;
  gap: 1.6rem;
  width: 100%;
  .price {
    height: 4.3rem;
    border: 1px solid #ff6700;
    flex: 1;
    border-radius: 1rem;
    display: flex;
    justify-content: center;
    align-items: center;

    font-weight: 500;
  }
  @media (min-width: 90em) {
    width: 50%;
  }
`;
export default StayDetails;
