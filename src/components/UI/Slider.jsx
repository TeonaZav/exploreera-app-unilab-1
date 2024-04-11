import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import SectionHeader from "./SectionHeader";

function Slider() {
  const [offers, setOffers] = useState([]);
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const fetchBlogs = async () => {
    try {
      const res = await fetch("./data/offers.json");
      const data = await res.json();

      setOffers(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  return (
    <SwiperWrapper>
      <SectionHeader heading="Popular Tour Offers" />
      <div className="btn-container">
        <CustomButton ref={navigationPrevRef}>
          <FontAwesomeIcon icon={faChevronLeft} className="icon" />
        </CustomButton>
        <CustomButton ref={navigationNextRef}>
          <FontAwesomeIcon icon={faChevronRight} className="icon" />
        </CustomButton>
      </div>

      <Swiper
        modules={[Navigation]}
        spaceBetween={20}
        slidesPerView={1.1}
        navigation={{
          prevEl: navigationPrevRef.current,
          nextEl: navigationNextRef.current,
        }}
        breakpoints={{
          800: {
            slidesPerView: 2.2,
          },
          1440: {
            slidesPerView: 4,
          },
        }}
      >
        {offers.map((offer) => {
          return (
            <SwiperSlide key={offer.id}>
              <StyledSlide>
                <img src={offer.imagePath} alt="Tour offer" />
              </StyledSlide>
              <h3>{offer.destination}</h3>
              <p>{offer.per}</p>
              <p>{offer.price}$</p>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </SwiperWrapper>
  );
}

const StyledSlide = styled.figure`
  width: 100%;
  height: calc((100vw - 11rem) * 1.25);
  overflow: hidden;
  border-radius: 1rem;
  background-color: black;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  @media (min-width: 50em) {
    height: calc((100vw - 10rem) / 2 * 1.25);
  }

  @media (min-width: 90em) {
    height: calc((100vw - 40rem) / 4 * 1.25);
  }
`;

const CustomButton = styled.button`
  color: #424244;
  cursor: pointer;
  background-color: transparent;
  border: none;
  font-size: 2.4rem;
  display: none;

  @media (min-width: 90em) {
    font-size: 3.2rem;
    display: inline-block;
  }
`;

const SwiperWrapper = styled.div`
  .btn-container {
    width: 100%;
    display: flex;
    justify-content: space-between;
  }
  h3 {
    font-size: 2rem;
    line-height: 2.3rem;
    color: #424244;
    font-weight: 500;
  }
  p {
    font-size: 1.8rem;
    line-height: 2.1rem;
  }
  @media (min-width: 120em) {
    h3 {
      font-size: 3.2rem;
      line-height: 3.8rem;
    }
 
  }
`;
export default Slider;
