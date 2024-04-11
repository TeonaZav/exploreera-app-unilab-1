import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { useModal } from "../../context/ModalContext";

function Modal({ children }) {
  const { closeModal } = useModal();

  return (
    <Overlay onClick={closeModal}>
      <StyledModal>
        <StyledModalHeader>
          {/* <h2 id="modalTitle">Modal Title</h2> */}
          <StyledCloseBtn onClick={closeModal}>
            <FontAwesomeIcon icon={faXmark} className="icon" />
          </StyledCloseBtn>
        </StyledModalHeader>

        <StyledModalContent>{children}</StyledModalContent>
      </StyledModal>
    </Overlay>
  );
}

const StyledModal = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 300;
  width: 80vw;
  height: 60vh;

  transform: translate(-50%, -50%);
  color: #424244;
  background-color: #ffffff;
  padding: 0 1.6rem 1.6rem;
  transition: all 0.5s ease-in-out;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 1.5rem;

  @media (min-width: 50em) {
    padding: 2.4rem;
    height: 60vh;
    width: 80vw;
  }
  @media (min-width: 90em) {
    padding: 2.4rem 6rem 6rem;
    width: 93.2rem;
    height: 59.5rem;
  }
`;

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(66, 66, 68, 0.6);
  backdrop-filter: blur(4px);
  z-index: 200;
  transition: all 0.5s;
`;

const StyledCloseBtn = styled.button`
  background-color: transparent;
  margin-left: auto;
  border: none;
  .icon {
    color: #424244ae;
    font-size: 4rem;
  }
  &&:hover,
  &&:active {
    .icon {
      color: #ff6700;
      font-size: 4rem;
    }
  }
`;

const StyledModalHeader = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-block: 1rem;

  h2 {
    margin-bottom: 0;
    font-weight: 400;
    text-align: center;
    width: 95%;
  }
`;

const StyledModalContent = styled.div`
  position: relative;
  max-height: 90%;
  overflow-y: auto;
`;
export default Modal;
