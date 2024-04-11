import styled from "styled-components";

const Button = ({ children, type, ...props }) => {
  return (
    <StyledButton {...props} type={type || "button"}>
      {children}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  background-color: ${(props) => props.$bgColor || "#ff6700"};
  color: ${(props) => props.color || "#ffffff"};
  height: ${(props) => props.height};
  border-radius: ${(props) => props.radiur || "1rem"};
  cursor: pointer;
  border: none;
  transition: all 0.2s ease-in-out;
  font-size: inherit;
  &:hover {
    background-color: ${(props) => props.bgColorHover || "#c85100"};
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

export default Button;
