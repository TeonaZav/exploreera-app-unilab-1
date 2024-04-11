import styled from "styled-components";

function FormField({ label, error, children, invoiceItem, hide }) {
  return (
    <StyledFormRow className={hide}>
      {!invoiceItem && (
        <LabelErrorCt>
          {label && (
            <Label
              htmlFor={children?.props?.id}
              color={`${error ? "error" : null}`}
            >
              {label}
            </Label>
          )}
        </LabelErrorCt>
      )}

      {children}
      {error && <Error>{error}</Error>}
    </StyledFormRow>
  );
}
export const StyledFormRow = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  box-sizing: border-box;
  flex: 1;
`;

export const LabelErrorCt = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const Error = styled.span`
  font-size: 1.4rem;
  line-height: 1.6rem;
  font-weight: 400;
  color: #ff0000;
`;

export const Label = styled.label`
  font-size: 1.4rem;
  line-height: 1.6rem;
  font-weight: 400;
  color: rgba(66, 66, 68, 0.7);
`;
export default FormField;
