import { useState, useEffect } from "react";
import styled from "styled-components";
import ServiceListItem from "./ServiceListItem";
import SectionHeader from "../UI/SectionHeader";
import BtnSeeAll from "../UI/BtnSeeAll";
import { useModal } from "../../context/ModalContext";
import Modal from "../UI/Modal";

const ServiceList = () => {
  const { isOpen, openModal } = useModal();
  const [services, setServices] = useState([]);

  const fetchServices = async () => {
    try {
      const res = await fetch("./data/services.json");
      const data = await res.json();

      setServices(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchServices();
  }, []);

  const allServices = (
    <StyledModalContent>
      {services?.map((service) => {
        return (
          <li key={service.id}>
            <ServiceListItem {...service} />
          </li>
        );
      })}
    </StyledModalContent>
  );

  return (
    <>
      {isOpen && <Modal>{allServices}</Modal>}
      <SectionHeader
        heading="Discover Our Services"
        text=" ExploreEra provides a one-stop solution for individuals seeking
          well-planned journeys. These services include expert advice on
          destination selection, flight and accommodation bookings, and
          customized itineraries to individual preferences."
      />

      <StyledServiceList>
        <BtnSeeAll onClick={openModal} btnText="See All" />

        {services.slice(0, 4).map((service) => {
          return (
            <li key={service.id}>
              <ServiceListItem {...service} />
            </li>
          );
        })}
      </StyledServiceList>
    </>
  );
};

const StyledServiceList = styled.ul`
  position: relative;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
  margin-bottom: 4rem;
  @media (min-width: 50em) {
    grid-template-columns: repeat(2, 1fr);
    margin-bottom: 0rem;
  }
  @media (min-width: 90em) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

const StyledModalContent = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 1rem;

  @media (min-width: 50em) {
    grid-template-columns: repeat(2, 1fr);
  }
  @media (min-width: 90em) {
    grid-template-columns: repeat(3, 1fr);
  }
`;
const StyledSeeAllButton = styled.button`
  position: absolute;
  padding: 1rem 0;
  font-size: 2rem;
  line-height: 2.3rem;
  font-weight: 500;
  letter-spacing: 0.2rem;
  color: #ff6700;
  border: none;
  text-decoration: underline;
  background-color: transparent;
  bottom: -5rem;
  left: 0;
  top: unset;

  &&:hover,
  &&:active {
    color: #c85100;
  }

  @media (min-width: 50em) {
    bottom: unset;
    left: unset;
    top: -4rem;
    right: 0;
  }
`;
export default ServiceList;
