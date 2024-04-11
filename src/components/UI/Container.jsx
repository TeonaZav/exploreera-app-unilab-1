import styled from "styled-components";

const Container = ({ children }) => {
  return <StyledContainer>{children} </StyledContainer>;
};

const StyledContainer = styled.div`
  margin: 0 auto;
  width: calc(100vw - 9rem);
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  @media (min-width: 50em) {
    width: calc(100vw - 8rem);
    gap: 3rem;
  }

  @media (min-width: 90em) {
    width: calc(100vw - 34rem);
    gap: 6rem;
  }

  @media (max-width: 300px) {
    width: 90%;
  }
`;

export default Container;
