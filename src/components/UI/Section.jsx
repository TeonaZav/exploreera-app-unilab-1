import styled from "styled-components";

const Section = ({ children, ...props }) => {
  return <StyledSection {...props}>{children}</StyledSection>;
};

const StyledSection = styled.section`
  width: 100%;
  height: auto;
  scroll-margin-top: 12rem;
`;

export default Section;
