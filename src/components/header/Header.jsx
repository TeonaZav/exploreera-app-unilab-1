import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import Logo from "../UI/Logo";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import DropdownMenu from "../UI/DropdownNav";

const links = [
  { hash: "/", name: "Home" },
  { hash: "#blogs", name: "Blogs" },
  { hash: "#our-services", name: "Our services" },
  { hash: "#our-offers", name: "Our offers" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 20);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  const color = isHomePage && !isScrolled ? "#ffffff" : "#424244";
  const bg = isHomePage && !isScrolled ? "transparent" : "#EAE9E9";

  return (
    <StyledHeader $bg={bg}>
      <Logo color={color} />
      <StyledNav>
        {links.map((link, index) => (
          <StyledLink
            href={link.hash}
            key={`${index}_${link.name}`}
            color={color}
          >
            {link.name}
          </StyledLink>
        ))}
        <DropdownMenu />
      </StyledNav>

      <StyledBurgenButton>
        <FontAwesomeIcon icon={faBars} size="xl" color={color} />
      </StyledBurgenButton>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100vw;
  color: ${(props) => props.color};
  background-color: ${(props) => props.$bg};
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 4.5rem;
  height: 4.8rem;
  transition: all 0.5s ease-in-out;

  @media (min-width: 50em) {
    padding: 0 4rem;
    height: 6rem;
  }

  @media (min-width: 90em) {
    padding: 0 17rem;
    height: 10.5rem;
  }
`;

const StyledLink = styled.a`
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  color: ${(props) => props.color};

  &&:hover,
  &&:active {
    color: #ff6700;
  }
`;

const StyledNav = styled.nav`
  gap: 4rem;
  font-size: 2.8rem;
  line-height: 3.2rem;
  font-weight: 400;
  display: none;
  @media (min-width: 90em) {
    display: flex;
  }
`;

const StyledBurgenButton = styled.button`
  cursor: pointer;
  background-color: transparent;
  border: none;
  display: "block";

  @media (min-width: 90em) {
    display: none;
  }
`;
export default Header;
