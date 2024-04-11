import styled from "styled-components";

function BtnSeeAll({ onClick, btnText, ...props }) {
  return (
    <StyledSeeAllButton {...props} onClick={onClick}>
      {btnText}
    </StyledSeeAllButton>
  );
}
const StyledSeeAllButton = styled.button`
  position: absolute;
  padding: 1rem 0;
  font-size: 2rem;
  line-height: 2.3rem;
  font-weight: 500;
  letter-spacing: 0.2rem;
  color: #ff6700;
  border: none;
  text-decoration: underline;
  background-color: transparent;
  bottom: -5rem;
  left: 0;
  top: unset;

  &&:hover,
  &&:active {
    color: #c85100;
  }

  @media (min-width: 50em) {
    bottom: unset;
    left: unset;
    top: -4rem;
    right: 0;
  }
`;
export default BtnSeeAll;
