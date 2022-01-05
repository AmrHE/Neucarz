import React, { useState } from "react";
import styled from "styled-components";
import tw from "twin.macro";
import { ICar } from "../../../typings/car";
import TopCarCard from "../../components/TopCarCard";
import Carousel, { Dots, slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import { useMediaQuery } from "react-responsive";
import { SCREENS } from "../../components/Responsive";
// import carService from "../../services/carService";
import { Dispatch } from "@reduxjs/toolkit";
import { GET_ALL_CARS_cars } from "../../services/carService/__generated__/GET_ALL_CARS";
import { setTopCars } from "./slice";
import { useSelector } from "react-redux";
import { makeSelectTopCars } from "./selectors";
import { createSelector } from "reselect";
// import MoonLoader from "react-spinners/MoonLoader";

const TopCarsContainer = styled.div`
  ${tw`
    max-w-screen-lg
    w-full
    flex
    flex-col
    items-center
    justify-center
    pr-4
    pl-4
    md:pl-0
    md:pr-0
    mb-10
  `}
`;

const Title = styled.h2`
  ${tw`
    text-2xl
    lg:text-4xl
    text-black
    font-extrabold
  `}
`;

const CarsContainer = styled.div`
  ${tw`
    w-full
    flex
    flex-wrap
    justify-center
    mt-7
    md:mt-10
    `}
`;

// const EmptyCars = styled.div`
//   ${tw`
//     w-full
//     flex
//     items-center
//     justify-center
//     text-sm
//     text-gray-500
//   `}
// `;

// const LoadingContainer = styled.div`
//   ${tw`
//     w-full
//     mt-9
//     flex
//     items-center
//     justify-center
//     text-base
//     text-black
//   `}
// `;

const actionDispatch = (dispatch: Dispatch) => ({
  setTopCars: (cars: GET_ALL_CARS_cars[]) => dispatch(setTopCars(cars)),
});

const stateSelector = createSelector(makeSelectTopCars, (topCars) => ({
  topCars,
}));

// const wait = (timeout: number) => new Promise((rs) => setTimeout(rs, timeout));

const TopCars = () => {
  const [current, setCurrent] = useState(0);
  // const [loading, setLoading] = useState(false);

  const isMobile = useMediaQuery({ maxWidth: SCREENS.sm });

  const { topCars } = useSelector(stateSelector);
  // const { setTopCars } = actionDispatch(useDispatch());

  // const fetchTopCars = async () => {
  //   setLoading(true);
  //   const cars = await carService.getAllCars().catch((err) => {
  //     console.log("ERROR: ", err);
  //   });

  //   await wait(5000);
  //   console.log("Cars: ", cars);
  //   if (cars) setTopCars(cars);

  //   setLoading(false);
  // };

  // useEffect(() => {
  //   fetchTopCars();
  // }, []);

  const isEmptyTopCars = !topCars || topCars.length === 0;

  // const cars =
  //   (!isEmptyTopCars &&
  //     topCars.map((car) => (
  //       <TopCarCard {...car} thumbnailSrc={car.thumbnailUrl} />
  //     ))) ||
  //   [];

  const testCar1: ICar = {
    name: "Audi S3 Car",
    mileage: "10K",
    thumbnailSrc:
      "https://cdn.jdpower.com/Models/640x480/2017-Audi-S3-PremiumPlus.jpg",
    dailyPrice: 70,
    monthlyPrice: 1600,
    gearType: "Auto",
    gas: "Petrol",
  };

  const testCar2: ICar = {
    name: "HONDA City 5 Seater Car",
    mileage: "20K",
    thumbnailSrc:
      "https://shinewiki.com/wp-content/uploads/2019/11/honda-city.jpg",
    dailyPrice: 50,
    monthlyPrice: 1500,
    gearType: "Auto",
    gas: "Petrol",
  };

  const cars = [
    <TopCarCard {...testCar1} />,
    <TopCarCard {...testCar2} />,
    <TopCarCard {...testCar1} />,
    <TopCarCard {...testCar2} />,
    <TopCarCard {...testCar1} />,
    <TopCarCard {...testCar2} />,
  ];

  // const handleCarouselChange = (current: any) => {
  //   setCurrent(current);
  // };

  const numberOfDots = isMobile ? cars.length : Math.ceil(cars.length / 3);

  // if (isEmptyTopCars) return null;

  return (
    <TopCarsContainer>
      <Title>Explore Our Top Ride</Title>
      {/* {loading && (
        <LoadingContainer>
          <MoonLoader loading size={20} />
        </LoadingContainer>
      )}
      {isEmptyTopCars && !loading && (
        <EmptyCars>No Cars To Show Right Now, We're Loading new 😉</EmptyCars>
      )}

      {!isEmptyTopCars && !loading && ( */}
      <CarsContainer>
        <Carousel
          value={current}
          onChange={setCurrent}
          slides={[
            <TopCarCard {...testCar1} />,
            <TopCarCard {...testCar2} />,
            <TopCarCard {...testCar1} />,
            <TopCarCard {...testCar2} />,
            // <TopCarCard {...testCar1} />,
          ]}
          plugins={[
            "clickToChange",
            {
              resolve: slidesToShowPlugin,
              options: {
                numberOfSlides: 3,
              },
            },
          ]}
          breakpoints={{
            640: {
              plugins: [
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 1,
                  },
                },
              ],
            },
            900: {
              plugins: [
                {
                  resolve: slidesToShowPlugin,
                  options: {
                    numberOfSlides: 2,
                  },
                },
              ],
            },
          }}
        />
        <Dots value={current} onChange={setCurrent} number={numberOfDots} />
      </CarsContainer>
      {/* )} */}
    </TopCarsContainer>
  );
};

export default TopCars;
