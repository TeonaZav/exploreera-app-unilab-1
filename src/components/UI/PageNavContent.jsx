import { NavLink } from "react-router-dom";
import styled from "styled-components";

const links = [
  { path: "/flights", name: "Flights" },
  { path: "/stays", name: "Stays" },
];
const PageNavContent = () => {
  return (
    <StyledList>
      {links.map((link, index) => (
        <li key={`${index}_${link.name}`}>
          <StyledLink to={link.path}>{link.name}</StyledLink>
        </li>
      ))}
    </StyledList>
  );
};

const StyledList = styled.ul`
  display: flex;
  align-items: center;
  gap: 1rem;
  overflow-x: hidden;
  li:nth-child(n + 4) {
    display: none;
  }
  @media (min-width: 90em) {
    li:nth-child(n + 4) {
      display: block;
    }
  }
`;

const StyledLink = styled(NavLink)`
  display: inline-block;
  color: #424244;
  padding: 1rem;
  font-size: 1.6rem;
  border-radius: 1rem;
  text-decoration: none;
  transition: all 0.3s ease-in-out;

  &&:active,
  &&.active {
    color: #ffffff;
    background-color: #ff6700;
  }

  @media (min-width: 50em) {
    padding: 1.2rem 2rem;
    font-size: 2rem;
    line-height: 2.3rem;
  }
  @media (min-width: 90em) {
    padding: 1.5rem 3rem;
    font-size: 2.4rem;
  }
`;

export default PageNavContent;
