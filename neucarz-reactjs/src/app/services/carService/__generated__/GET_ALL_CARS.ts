/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: GET_ALL_CARS
// ====================================================

export interface GET_ALL_CARS_cars {
  __typename: "Car";
  id: string;
  name: string;
  mileage: string;
  gearType: string;
  gas: string;
  dailyPrice: number;
  monthlyPrice: number;
  thumbnailUrl: string;
}

export interface GET_ALL_CARS {
  cars: GET_ALL_CARS_cars[];
}
