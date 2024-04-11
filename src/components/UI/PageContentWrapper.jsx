import styled from "styled-components";
import Container from "./Container";

const PageContentWrapper = ({
  navigationContent,
  filterContent,
  mainContent,
  sidebarContent,
}) => {
  return (
    <Container>
      <Wrapper>
        <Navigation>{navigationContent}</Navigation>
        <Filter>{filterContent}</Filter>
        <Content>{mainContent}</Content>
        <Sidebar>{sidebarContent}</Sidebar>
      </Wrapper>
    </Container>
  );
};

const Wrapper = styled.div`
  width: 100%;
  display: grid;
  row-gap: 2.4rem;
  column-gap: 0;

  grid-template-columns: 100%;
  grid-template-areas:
    "nav"
    "filterbox"
    "sidebar"
    "content";
  @media (min-width: 50em) {
    row-gap: 3rem;
    column-gap: 2rem;
  }
  @media (min-width: 90em) {
    row-gap: 6rem;

    grid-template-columns: 1.5fr 3.5fr;
    grid-template-areas:
      "nav nav nav"
      "filterbox filterbox filterbox"
      "sidebar content content";
  }
`;

const Navigation = styled.nav`
  grid-area: nav;

`;

const Content = styled.div`
  grid-area: content;

`;

const Sidebar = styled.div`
  grid-area: sidebar;
`;
const Filter = styled.div`
  grid-area: filterbox;
`;
export default PageContentWrapper;
