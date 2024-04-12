import styled from "styled-components";

import { NavLink } from "react-router-dom";
import { useAuth } from "./../../context/AuthContext";

const links = [
  { hash: "/", name: "Home" },
  { hash: "#blogs", name: "Blogs" },
  { hash: "#our-services", name: "Our services" },
  { hash: "#our-offers", name: "Our offers" },
];

const DropdownMenu = ({ isOpen, handleLogout }) => {
  const { isAuthenticated } = useAuth();

  return (
    <StyledDropDown className="dropdown">
      {isOpen && (
        <StyledDropDown className="dropdown-menu">
          {isAuthenticated ? (
            <StyledDropMenu>
              <li>
                <button onClick={handleLogout} className="btn-logout">
                  Logout
                </button>
              </li>
            </StyledDropMenu>
          ) : (
            <>
              <StyledDropMenu>
                <ul>
                  <li>
                    <NavLink to="/login">Sign in</NavLink>
                  </li>
                  <li>
                    <NavLink to="/signup">Sign up</NavLink>
                  </li>
                </ul>
                <ul className="dropdown-links">
                  {links.map((link, index) => (
                    <li key={`${index}_${link.name}`}>
                      <NavLink href={link.hash}>{link.name}</NavLink>
                    </li>
                  ))}
                </ul>
              </StyledDropMenu>
            </>
          )}
        </StyledDropDown>
      )}
    </StyledDropDown>
  );
};

const StyledDropDown = styled.div`
  height: auto;
  position: relative;
`;
const StyledDropMenu = styled.div`
  top: 5rem;
  right: 0;
  position: absolute;
  width: 20rem;
  height: auto;
  background-color: #ffffff;
  padding: 1rem;
  border-radius: 1rem;

  ul {
    &:not(:last-of-type) {
      border-bottom: 1px solid #424244;
    }
  }

  li {
    padding-block: 1rem;
    list-style: none;
    a,
    a:visited {
      color: #424244;
      transition: all 0.3s ease-in-out;
    }

    button:hover,
    a:hover {
      color: #ff6700;
    }

    button {
      background-color: transparent;
      border: none;
    }
  }
  @media (min-width: 90em) {
    width: 24.7rem;
  }

  @media (min-width: 90em) {
    ul {
      &:not(:last-of-type) {
        border-bottom: none;
      }
    }
    li {
      &:not(:last-of-type) {
        border-bottom: 1px solid #ff6700;
      }
    }
    .dropdown-links {
      display: none;
    }
  }
`;

export default DropdownMenu;
