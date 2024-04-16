import styled from "styled-components";

import StaysListItem from "./StaysLIstItem";

import { useStays } from "../../context/StaysContext";

const StaysList = () => {
  const {  stays, loading, error } = useStays();

  if (loading) return <p>Loading...</p>;

  if (error)
    return (
      <StyledErrorMessage>{error || "No stays available."}</StyledErrorMessage>
    );

  return (
    <>
      <StyledList>
        {stays.length > 0 ? (
          stays.map((stay) => <StaysListItem key={stay.id} {...stay} />)
        ) : (
          <StyledErrorMessage>
            {error || "No flights available for the selected date."}
          </StyledErrorMessage>
        )}
      </StyledList>
    </>
  );
};

const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const StyledErrorMessage = styled.p`
  font-size: 1.8rem;
  color: red;
  font-weight: 500;
  padding: 1.5rem;
  background-color: #ed0f0f36;
  border-radius: 1rem;

  margin-top: 2.4rem;
  line-height: 2rem;
`;
export default StaysList;
