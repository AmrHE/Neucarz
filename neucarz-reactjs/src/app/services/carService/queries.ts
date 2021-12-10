import gql from "graphql-tag";

export const GET_ALL_CARS = gql`
  query GET_ALL_CARS {
    cars {
      id
      name
      mileage
      gearType
      gas
      dailyPrice
      monthlyPrice
      thumbnailUrl
    }
  }
`;
