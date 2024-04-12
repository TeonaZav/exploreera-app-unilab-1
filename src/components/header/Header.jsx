import { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faSignature, faUser } from "@fortawesome/free-solid-svg-icons";

import { useAuth } from "./../../context/AuthContext";

import Logo from "../UI/Logo";
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
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const { isAuthenticated, logout, user } = useAuth();

  useEffect(() => {
    console.log(user);
    const handleScroll = () => {
      const offset = window.scrollY;
      setIsScrolled(offset > 20);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [user]);

  const toggleDropdown = () => {
    setIsDropdownOpen((prev) => !prev);
  };

  const handleLogout = () => {
    logout();
    setIsDropdownOpen(false);
  };

  const color = isHomePage && !isScrolled ? "#ffffff" : "#424244";
  const bg = isHomePage && !isScrolled ? "transparent" : "#EAE9E9";

  return (
    <StyledHeader $bg={bg}>
      <Logo color={color} />
      <StyledNavCt>
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

          <StyledUserImageButton
            className="dropdown-toggle"
            onClick={toggleDropdown}
            color={color}
          >
            {user?.userImage ? (
              <img
                src={`data:image/png;base64,${user.userImage}`}
                alt="user avatar"
              />
            ) : (
              <FontAwesomeIcon icon={faUser} className="icon" />
            )}
          </StyledUserImageButton>
        </StyledNav>
        <StyledBurgenButton onClick={toggleDropdown}>
          <FontAwesomeIcon icon={faBars} size="xl" color={color} />
        </StyledBurgenButton>

        <DropdownMenu isOpen={isDropdownOpen} handleLogout={handleLogout} />
      </StyledNavCt>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100vw;
  color: ${(props) => props.color};
  background-color: ${(props) => props.$bg};

  padding: 0 4.5rem;
  height: 4.8rem;

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

const StyledNavCt = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  gap: 1rem;
`;
const StyledNav = styled.nav`
  height: 100%;
  display: flex;
  align-items: center;
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

const StyledUserImageButton = styled.button`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 10rem;
  border-radius: 100%;
  background-color: transparent;
  overflow: hidden;
  padding: 0 1rem;
  border: none;
  transition: all 0.3s ease-in-out;
  img {
    width: 10rem;
    height: 100%;
    object-fit: cover;
  }
  .icon {
    color: ${(props) => props.color};
  }
  &&:hover {
    .icon {
      color: #c85100;
    }
  }
`;
export default Header;
