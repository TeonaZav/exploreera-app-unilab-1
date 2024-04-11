import styled from "styled-components";

function ServiceListItem({ imagePath, serviceName, description }) {
  return (
    <ServiceArticle>
      <ServiceImage src={imagePath} alt="Art & Museum Tours" loading="lazy" />
      <StyledInfo>
        <h3>{serviceName}</h3>
        <p>{description}</p>
      </StyledInfo>
    </ServiceArticle>
  );
}

const ServiceArticle = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const ServiceImage = styled.img`
  width: 100%;
  border-radius: 1rem;
  min-height: 22.2rem;
  max-height: calc(100vw * 0.51);
  object-fit: cover;
  @media (min-width: 50em) {
    min-height: 24.8rem;
    max-height: calc((100vw - 10rem) / 2 * 0.71);
  }
  @media (min-width: 90em) {
    border-radius: 2rem;
    max-height: calc((100vw - 40rem) / 4 * 0.65);
  }
`;

const StyledInfo = styled.div`
  h3 {
    font-size: 2rem;
    line-height: 2.3rem;
  }
  p {
    font-size: 1.6rem;
    line-height: 1.8rem;
    color: rgba(37, 37, 37, 0.8);
  }
  @media (min-width: 50em) {
    h3 {
      font-size: 2.8rem;
      line-height: 3.2rem;
    }
  }
  @media (min-width: 120em) {
    h3 {
      font-size: 3.2rem;
      line-height: 3.7rem;
    }
    p {
      font-size: 1.8rem;
      line-height: 2.1rem;
    }
  }
`;
export default ServiceListItem;
