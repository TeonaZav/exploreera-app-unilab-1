import styled, { css } from "styled-components";
import { NavLink } from "react-router-dom";
import Container from "../UI/Container";
import Logo from "../UI/Logo";

import {
  IconFacebook,
  IconInstagram,
  IconLinkedin,
  IconRightArrow,
} from "./SVGIcons";

const links = [
  { hash: "#home", name: "Home" },
  { hash: "#about-us", name: "About us" },
  { hash: "#blogs", name: "Blogs" },
  { hash: "#our-services", name: "Our services" },
  { hash: "#our-offers", name: "Our offers" },
];

const Footer = () => {
  return (
    <StyledFooter>
      <Container className="footer-content">
        <StyledFooterContent>
          <StyledFooteItem>
            <Logo color="#424244" />
            <p>Travel agency which helps you to plan your perfect holidays</p>
            <h5>Follow us</h5>
            <SocialLinks>
              <li>
                <IconFacebook />
              </li>
              <li>
                <IconInstagram />
              </li>
              <li>
                <IconLinkedin />
              </li>
            </SocialLinks>
          </StyledFooteItem>

          <StyledNav>
            <h5>Links</h5>
            {links.map((link, index) => (
              <StyledLink href={link.hash} key={`${index}_${link.name}`}>
                {link.name}
              </StyledLink>
            ))}
          </StyledNav>

          <StyledFooteItemsCt>
            <ContactInfo>
              <h5>Contact us</h5>
              <p>exploreera@gmail.com</p>
              <p>555111222</p>
            </ContactInfo>
            <Subscribe>
              <h5>Subscribe news</h5>
              <button>
                Email <IconRightArrow />
              </button>
            </Subscribe>
          </StyledFooteItemsCt>
        </StyledFooterContent>

        <CopyrightText>Copyright 2024</CopyrightText>
      </Container>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  width: 100%;
  max-width: 100vw;
  padding-top: 4rem;
  color: #424244;
  background-color: #eae9e9;
  overflow-x: hidden !important;
`;

const baseFontSize = css`
  font-size: 1.6rem;
  line-height: 2.3rem;
  font-weight: 400;

  @media (min-width: 120em) {
    font-size: 2.4rem;
    line-height: 2.8rem;
  }
`;

const StyledFooterContent = styled.div`
  max-width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;

  h5 {
    font-size: 2.4rem;
    line-height: 2.8rem;
    font-weight: 400;
  }
  @media (min-width: 50em) {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
  @media (min-width: 90em) {
    flex-wrap: nowrap;
    justify-content: space-between;
  }

  @media (min-width: 120em) {
    h5 {
      font-size: 3.2rem;
      line-height: 3.8rem;
    }
  }
`;

const StyledFooteItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  ${baseFontSize}
  @media (min-width: 50em) {
    width: 35rem;
  }
  @media (min-width: 90em) {
    width: 28rem;
  }
`;

const StyledFooteItemsCt = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media (min-width: 50em) {
    width: 72rem;
    flex-direction: row;
  }
  @media (min-width: 90em) {
    width: 28rem;
    flex-direction: column;
  }
`;

const SocialLinks = styled.ul`
  display: flex;
  gap: 2rem;
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  ${baseFontSize}
  @media (min-width: 50em) {
    width: 35rem;
  }
  @media (min-width: 90em) {
    width: 28rem;
  }
`;

const Subscribe = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  ${baseFontSize}
  button {
    width: 22.5rem;
    max-width: 90%;
    height: 5.4rem;
    border: 1px solid #424244;
    border-radius: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
  }
  @media (min-width: 50em) {
    width: 35rem;
  }
  @media (min-width: 90em) {
    width: 28rem;
  }
`;

const StyledNav = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media (min-width: 50em) {
    width: 35rem;
  }
  @media (min-width: 90em) {
    width: 28rem;
  }
`;

const CopyrightText = styled.p`
  ${baseFontSize}
  width: 100%;
  text-align: center;
  /* padding: 2rem 0 4rem 0; */
`;

const StyledLink = styled.a`
  ${baseFontSize}
  cursor: pointer;
  color: #424244;
  text-decoration: none;
  transition: all 0.3s ease-in-out;
  &:hover,
  &:active {
    color: #ff6700;
  }
`;

export default Footer;
