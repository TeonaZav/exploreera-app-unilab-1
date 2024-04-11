import styled from "styled-components";
import Button from "./../UI/Button";
import { getFullTime } from "../../utils/helpers";
const FlightsListItem = ({
  logoUrl,
  airline,
  stops,
  date,
  takeOff,
  landing,
  price,
  duration,
}) => {
  const stopsArr = Array.from({ length: stops }, (_, i) => i + 1);

  const takeOffTime = getFullTime(takeOff);
  const landingTime = getFullTime(landing);
  return (
    <StyledFlight>
      <StyledFlightInfo>
        <StyledDate>{date}</StyledDate>
        <StyledFigure>
          <img src={logoUrl} alt={airline} /> <figcaption>{airline}</figcaption>
        </StyledFigure>
        <StyledFlightTimes>
          <div>
            <span>Take Off {price}</span>
            <span>{takeOffTime}</span>
          </div>
          <StyledLine>
            <StyledStopSigns>
              {stops
                ? stopsArr.map((_, index) => <div key={index}></div>)
                : null}
            </StyledStopSigns>
          </StyledLine>
          <div>
            <span>Landing</span>
            <span>{landingTime}</span>
          </div>
          <span className="duration">{duration}</span>
        </StyledFlightTimes>
      </StyledFlightInfo>

      <Button $bgColor="#FF8C3E" color="#424244" size="inherit">
        View Deal
      </Button>
    </StyledFlight>
  );
};

const StyledFlight = styled.li`
  position: relative;
  box-sizing: border-box;
  width: 100%;
  background-color: #ffffff;
  border-radius: 0.8rem;
  padding: 2rem 1.6rem 1.2rem 1.6rem;
  color: #424244;
  box-shadow: rgba(0, 0, 0, 0.021) 0px 1px 2px 0px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 1.6rem;
  gap: 2rem;
  button {
    width: 100%;
    height: 4.4rem;
    padding: 1rem;
  }
  @media (min-width: 50em) {
    font-size: 2rem;
    border-radius: 1.6rem;

    padding: 4rem 6rem 3rem 6rem;
    button {
      height: 5.4rem;
      flex: 1;
    }
  }
  @media (min-width: 90em) {
    border-radius: 2rem;
    height: 19rem;
    padding: 4.4rem 13rem;
    flex-direction: row;
    align-items: center;
  }
  @media (max-width: 300px) {
    font-size: 1.2rem;
    border-radius: 1rem;
    padding: 3rem 1rem;
  }
`;

const StyledDate = styled.span`
  color: #4242448a;
  position: absolute;
  top: 1rem;
  left: 40%;
`;

const StyledFigure = styled.figure`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  margin: 0;
  width: 15%;
  font-size: 1.2rem;
  line-height: 1.4rem;
  font-weight: 400;
  border-radius: 1rem;

  img {
    width: 2.4rem;
    height: auto;
  }
  @media (min-width: 50em) {
    img {
      width: 6rem;
    }
  }
  @media (min-width: 90em) {
    width: 16rem;
    font-size: 2rem;
    line-height: 2.4rem;
  }
`;

const StyledFlightTimes = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 1.2rem;
  line-height: 1.4rem;
  align-items: center;
  justify-content: space-between;
  width: 80%;

  div {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
  .duration {
    color: #4242448a;
    margin-left: 0.8rem;
  }
  @media (min-width: 50em) {
    font-size: 1.8rem;
  }
  @media (min-width: 90em) {
    font-size: 2rem;
    line-height: 2.4rem;
  }
`;
const StyledFlightInfo = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  gap: 1rem;
  @media (min-width: 90em) {
    width: calc(100% - 17rem);
  }
`;

const StyledLine = styled.div`
  width: 8rem;
  height: 2px;
  background-color: #c85100;
  margin: 0 auto;
  align-self: center;
  justify-self: center;
  position: relative;
  @media (min-width: 50em) {
    width: 17rem;
  }
`;

const StyledStopSigns = styled.div`
  left: 50%;
  top: 50%;
  width: 100%;
  display: flex;
  flex-direction: row !important;
  justify-content: space-around;
  gap: 1rem;
  position: absolute;
  transform: translate(-50%, -50%);
  & div {
    width: 0.8rem;
    height: 0.8rem;
    background-color: #dbdbdb;
    border: 1px solid #424244;

    @media (min-width: 90em) {
      width: 1.5rem;
      height: 1.5rem;
    }
  }
`;
export default FlightsListItem;
