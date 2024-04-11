import styled from "styled-components";

export const Input = styled.input`
  width: 100%;
  color: #424244;
  background-color: #ffffff;
  border-radius: 0.4rem;
  padding: 1.2rem 2rem;
  height: 5rem;
  border: 1px solid #ff6600bd;
  @media (min-width: 50em) {
    height: 5.4rem;
  }
`;

export const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  font-size: 1.6rem;
`;

export const StyledLoginCt = styled.div`
  width: 100%;
  padding: 2.4rem 3rem;
  background-color: #ffffff;
  margin: 0 auto;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  @media (min-width: 50em) {
    width: 54rem;
    padding: 5rem 7rem;
  }
`;



export const PrivacyPolicy = styled.div`
  align-self: center;
  text-align: center;
  font-weight: 400;
  font-size: 1.4rem;
  span {
    text-align: center;
    color: rgba(66, 66, 68, 0.889);
  }

  button {
    color: #c85100;
    background-color: transparent;
    border: none;
    padding: 0.5rem;
  }
  .icon {
    font-size: 2.4rem;
    color: green;
  }
`;

