import styled from "styled-components";
import Container from "./../components/UI/Container";
import Section from "./../components/UI/Section";
import Hero from "../components/hero/Hero";
import ServiceList from "../components/services/ServiceList";
import Video from "../components/video/Video";
import Slider from "./../components/UI/Slider";
import BlogsList from "../components/blogs/BlogsList";
import Header from "./../components/header/Header";
import Footer from "../components/footer/Footer";

function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Container>
          <Section id="our-services">
            <ServiceList />
          </Section>
          <Section>
            <Video />
          </Section>
          <Section id="our-offers">
            <Slider />
          </Section>
          <Section id="blogs">
            <BlogsList />
          </Section>
          <Section id="Ready To Book A Trip?s">{/* <BookingForm /> */}</Section>
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default Home;
