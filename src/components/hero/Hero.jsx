import styled from "styled-components";
import { motion } from "framer-motion";
import BgImage from "./../../assets/hero-bg.png";
import Button from "../UI/Button";

const heroVariants = {
  hidden: { opacity: 0.5, scale: 1 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
};

const Hero = () => {
  return (
    <HeroSection
      initial="hidden"
      animate="visible"
      variants={heroVariants}
      id="home"
    >
      <h1>
        Visit Mountains In <br /> <em>ITALY</em>
      </h1>
      <Button onClick={() => {}}>See offer</Button>
    </HeroSection>
  );
};

const HeroSection = styled(motion.section)`
  min-width: 100vw;
  height: calc(100vw * 0.5);
  font-size: 1.6rem;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
  place-items: center;
  justify-content: center;
  text-align: center;
  font-weight: 500;
  letter-spacing: 0.1rem;
  width: 100vw;
  background-image: url(${BgImage});
  background-size: cover;
  background-repeat: no-repeat;

  color: #ffffff;
  opacity: 0;
  transition: opacity 1s ease-out;
  h1 {
    font-size: 1.6rem;
    line-height: 1.8rem;
  }

  em {
    font-size: 2.4rem;
    line-height: 2.8rem;
    font-style: normal;
    font-weight: 600;
  }
  button {
    font-size: 1.6rem;
    padding: 0.8rem 2rem;
    border-radius: 1rem;
  }

  @media (min-width: 50em) {
    height: calc(100vw * 0.46);

    h1 {
      font-size: 2.4rem;
      line-height: 2.8rem;
    }

    em {
      font-size: 3rem;
      line-height: 3.5rem;
    }

    button {
      font-size: 2rem;
      padding: 1rem 3rem;
      border-radius: 1rem;
    }
  }

  @media (min-width: 90em) {
    h1 {
      font-size: 4rem;
      line-height: 4.7rem;
    }
    em {
      font-size: 6.4rem;
      line-height: 7.5rem;
    }
    button {
      font-size: 2.4rem;
      padding: 2rem 4rem;
      border-radius: 2rem;
    }
  }

  @media (min-width: 120em) {
    height: 88.5rem;
  }
`;

export default Hero;
