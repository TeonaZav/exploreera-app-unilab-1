import { Link } from "react-router-dom";
import styled from "styled-components";

const Logo = ({ color }) => {
  return (
    <Link to="/">
      <StyledLogo color={color}>ExploreEra</StyledLogo>
    </Link>
  );
};

const StyledLogo = styled.h3`
  font-family: "Kalnia", serif;
  font-size: 2.4;

  font-weight: 500;

  color: ${(props) => props.color};

  @media (min-width: 50em) {
    font-size: 2.8rem;
    line-height: 3.8rem;
  }

  @media (min-width: 90em) {
    font-size: 4.8rem;
    line-height: 6.5rem;
  }
`;

export default Logo;
