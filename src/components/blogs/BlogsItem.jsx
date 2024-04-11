import styled from "styled-components";

const BlogsItem = ({ imagePath, description }) => {
  return (
    <StyledBlogsItem>
      <StyledFigure>
        <img src={imagePath} alt="blog image" loading="lazy" />
      </StyledFigure>

      <h3>{description}</h3>
    </StyledBlogsItem>
  );
};

const StyledBlogsItem = styled.article`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  h3 {
    font-size: 2rem;
    line-height: 2.3rem;
    color: #424244;
    font-weight: 500;
  }

  @media (min-width: 120em) {
    min-width: 51.3rem;
    h3 {
      font-size: 3.2rem;
      line-height: 3.8rem;
    }
  }
`;

const StyledFigure = styled.figure`
  width: 100%;
  height: calc((100vw - 9rem) * 0.66);
  border-radius: 1.5rem;
  background-color: gray;
  overflow: hidden;

  img {
    width: 100%;
    object-fit: cover;
  }

  @media (min-width: 50em) {
    height: calc((100vw - 10rem) / 2 * 0.65);
  }
  @media (min-width: 90em) {
    height: calc((100vw - 40rem) / 3 * 0.67);
  }
`;

export default BlogsItem;
