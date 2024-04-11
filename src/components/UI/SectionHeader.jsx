import styled from "styled-components";

const SectionHeader = ({ heading, text }) => {
  return (
    <StyledSectionHeader>
      {heading && <StyledSectionHeading>{heading}</StyledSectionHeading>}
      {text && <StyledSectionText>{text}</StyledSectionText>}
    </StyledSectionHeader>
  );
};

const StyledSectionHeader = styled.header`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  margin-bottom: 2rem;
`;

const StyledSectionHeading = styled.h2`
  font-size: ${(props) => props.fsize || "2.2rem"};
  line-height: 2.6rem;
  color: #424244;
  font-weight: 500;
  text-align: left;
  text-transform: capitalize;

  @media (min-width: 50em) {
    font-size: ${(props) => props.fsize || "3.2rem"};
    line-height: 3.8rem;
  }

  @media (min-width: 90em) {
    font-size: ${(props) => props.fsize || "4rem"};
    line-height: 4.7rem;
  }
`;
const StyledSectionText = styled.p`
  font-size: 1.4rem;
  line-height: 1.6rem;
  font-weight: 400;
  color: #252525cc;
  text-align: left;

  @media (min-width: 90em) {
    font-size: 2rem;
    line-height: 2.3rem;
  }
`;
export default SectionHeader;
