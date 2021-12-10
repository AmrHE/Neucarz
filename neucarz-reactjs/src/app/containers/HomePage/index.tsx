import React from "react";
import styled from "styled-components";
import tw from "twin.macro";
import BookingCard from "../../components/BookingCard";
import Footer from "../../components/Footer";
import { Marginer } from "../../components/Marginer";
import Navbar from "../../components/Navbar";
import AboutUs from "./AboutUs";
import BookingSteps from "./BookingSteps";
import TopCars from "./TopCars";
import TopSection from "./TopSection";

const PageContainer = styled.div`
  ${tw`
    flex
    flex-col
    w-full
    h-full
    items-center
    overflow-x-hidden
    
  `}
`;

const HomePage = () => {
  return (
    //TODO Create a conmponent that contains Navbar & Footer and import it here and reuse it in all the pages
    <PageContainer>
      <Navbar />
      <TopSection />
      <Marginer direction="vertical" margin="4em" />
      <BookingCard />
      <Marginer direction="vertical" margin="8em" />
      <BookingSteps />
      <Marginer direction="vertical" margin="8em" />
      <AboutUs />
      <Marginer direction="vertical" margin="8em" />
      <TopCars />
      <Footer />
    </PageContainer>
  );
};

export default HomePage;
