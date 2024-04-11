import styled from "styled-components";
import Button from "../../UI/Button";

const ModalContent = ({ onAgree }) => (
  <StyledModalContent>
    <div>
      <h2>Terms and conditions</h2>
      <p>
        Before you use our website or services, please carefully read the
        following Terms and Conditions. By accessing or using our platform, you
        agree to comply with and be bound by these terms. If you do not agree
        with any part of these terms, please do not use our services. Your
        privacy is important to us. Please review our Privacy Policy to
        understand how we collect, use, and disclose information about you. By
        using our services, you consent to our privacy practices.
      </p>
    </div>
    <div>
      <h2>Privacy policy</h2>
      <p>
        We may collect personal information, such as your name, email address,
        and other details, when you register an account, make a purchase, or
        interact with our services. We also automatically collect certain
        information, such as IP addresses, browser type, and usage patterns,
        through cookies and similar technologies. Our website may contain links
        to third-party websites or services.
      </p>
    </div>
    <Button onClick={onAgree}>I agree</Button>
  </StyledModalContent>
);

export const StyledModalContent = styled.div`
  color: #424244;
  display: flex;
  flex-direction: column;
  gap: 3rem;

  h2 {
    font-weight: 400;
    font-size: 2rem;
    margin-bottom: 2rem;
  }

  p {
    font-size: 1.2rem;
    line-height: 2.1rem;
    font-weight: 400;
  }

  button {
    height: 5rem;
    font-size: 1.6rem;
    width: 100%;
    align-self: center;
  }

  @media (min-width: 50em) {
    p {
      font-size: 1.6rem;
    }
    h2 {
      font-size: 2.4rem;
    }
    button {
      width: 50%;
    }
  }
`;

export default ModalContent;
