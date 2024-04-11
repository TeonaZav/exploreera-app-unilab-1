import styled from "styled-components";
import Container from "./Container";
import Header from "./../header/Header";
import Footer from "./../footer/Footer";

const Layout = ({ children }) => (
  <StyledLayout>
    <Header />
    <StyledMain>
      <Container>{children}</Container>
    </StyledMain>
    <Footer />
  </StyledLayout>
);

const StyledMain = styled.main`
  flex: 1;
  margin-top: 4.8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-top: 2.4rem;
  @media (min-width: 50em) {
    margin-top: 6rem;
    padding-top: 3rem;
  }
  @media (min-width: 90em) {
    margin-top: 10.5rem;
    padding-top: 6rem;
  }
`;
const StyledLayout = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  min-height: 100vh;
`;
export default Layout;
