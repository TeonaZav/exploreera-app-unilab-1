import styled from "styled-components";
import FbIcon from "./../../../assets/fb-icon.png";
import AppleIcon from "./../../../assets/gmail-icon.png";
import GoogleIcon from "./../../../assets/gmail-icon.png";
import GmailIcon from "./../../../assets/gmail-icon.png";

function FormBtnGroup() {
  return (
    <>
      <StyledTitle>
        <div></div>
        <span>Or continue with</span>
        <div></div>
      </StyledTitle>
      <StyledButtonGroup>
        <button type="button">
          <img src={FbIcon} alt="facebook icon" />
        </button>
        <button type="button">
          <img src={AppleIcon} alt="apple icon" />
        </button>
        <button type="button">
          <img src={GoogleIcon} alt="google icon" />
        </button>
        <button type="button">
          <img src={GmailIcon} alt="gmail icon" />
        </button>
      </StyledButtonGroup>
    </>
  );
}
const StyledTitle = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  span {
    white-space: nowrap;
    padding: 0 1.6rem;
    font-size: 1.4rem;
  }
  div {
    flex-grow: 1;
    height: 1px;
    background-color: rgba(66, 66, 68, 0.7);
    margin: 0 10px;
  }
`;

const StyledButtonGroup = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 1.6rem;

  & button {
    width: 5.8rem;
    height: 5.8rem;
    background-color: transparent;
    border-radius: 0.5rem;
    border: 1px solid rgba(66, 66, 68, 0.7);
    width: calc((100% - 4.8rem) / 4);
    img {
      object-fit: cover;
    }
  }
`;
export default FormBtnGroup;
