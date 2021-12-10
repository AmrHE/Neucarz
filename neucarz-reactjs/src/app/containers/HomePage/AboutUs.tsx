import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { SCREENS } from "../../components/Responsive";
import JeepImg from "../../../assets/images/jeep.png";

const AboutUsContainer = styled.div`
  ${tw`
    w-full
    flex
    flex-wrap
    items-center
    2xl: justify-center
    pt-4
    pb-4
    pr-7
    pl-7
    md:pl-0
    md:pr-0
    bg-white
  `}
`;
//Left Container
const CarContainer = styled.div`
  width: auto;
  height: 15em;
  margin-left: -30px;

  img {
    width: auto;
    height: 100%;
  }

  @media (min-width: ${SCREENS.md}) {
    height: 28em;
  }
  @media (min-width: ${SCREENS.lg}) {
    height: 30em;
  }
  @media (min-width: ${SCREENS["2xl"]}) {
    height: 35em;
    margin-left: 0;
  }
`;
//Right Container
const InfoContainer = styled.div`
  ${tw`
    md:w-1/2
    flex
    flex-col
    md:ml-6
    2xl:ml-16
  `}
`;

const Title = styled.h1`
  ${tw`
    text-black
    text-2xl
    md:text-5xl
    font-extrabold
    md:font-black
    md:leading-normal

  `}
`;

const InfoText = styled.p`
  ${tw`
    max-w-2xl
    text-sm
    md:text-base
    text-gray-500
    font-normal
    mt-4
  `}
`;

const AboutUs = () => {
  return (
    <AboutUsContainer>
      <CarContainer>
        <img src={JeepImg} />
      </CarContainer>
      <InfoContainer>
        <Title>Feel The Best Experience With Our Deals</Title>
        <InfoText>
          Neucarz was founded in 1998 in Egypt, we have just started with about
          2-5 vehicles, and now we have spent over 23 years in this business
          field, 23 years of customer needs coverage, 23 years of customer
          satisfaction, 23 years the best car rental experience you may ever
          have.
        </InfoText>
        <InfoText>
          Whether traveling for business or pleasure, Neucarz can satisfy your
          mobility needs in Egypt. We have a large selection of luxury and
          economy vehicles on offer at affordable rates. With our excellent
          customer service and premium fleet, we have your Egypt rent a car
          needs covered.
        </InfoText>
      </InfoContainer>
    </AboutUsContainer>
  );
};

export default AboutUs;
