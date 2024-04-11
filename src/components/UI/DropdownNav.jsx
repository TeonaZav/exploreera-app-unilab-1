import styled from "styled-components";

import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useAuth } from "./../../context/AuthContext";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";

const DropdownMenu = () => {
  const { isAuthenticated, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleLogout = () => {
    logout();
    setIsOpen(false);
  };

  return (
    <StyledDropDown className="dropdown">
      <StyledUserImageButton
        className="dropdown-toggle"
        onClick={toggleDropdown}
      >
        {isAuthenticated ? (
          "Logout"
        ) : (
          <FontAwesomeIcon icon={faUser} className="icon" />
        )}
      </StyledUserImageButton>
      {isOpen && (
        <StyledDropDown className="dropdown-menu">
          {isAuthenticated ? (
            <StyledDropMenu>
              <li>
                <button onClick={handleLogout}>Logout</button>
              </li>
            </StyledDropMenu>
          ) : (
            <StyledDropMenu>
              <li>
                <NavLink to="/login">Sign in</NavLink>
              </li>
              <li>
                <NavLink to="/signup">Sign up</NavLink>
              </li>
            </StyledDropMenu>
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
const StyledDropMenu = styled.ul`
  top: 5rem;
  right: 0;
  position: absolute;
  width: 24.7rem;
  height: auto;
  background-color: #ffffff;
  padding: 1rem;
  border-radius: 1rem;
  li {
    padding-block: 1rem;

    &:not(:last-of-type) {
      border-bottom: 1px solid #ff6700;
    }

    a,
    a:visited {
      color: #424244;
      transition: all 0.3s ease-in-out;
    }
    a:hover {
      color: #ff6700;
    }
  }
`;
const StyledUserImageButton = styled.button`
  background-color: transparent;
  padding: 0 1rem;
  border: none;
  transition: all 0.3s ease-in-out;
  .icon {
    color: #424244;
  }
  &&:hover {
    .icon {
      color: #c85100;
    }
  }
`;
export default DropdownMenu;
