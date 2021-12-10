/* eslint-disable */
import { apolloClient } from "../../graphql";
import { GET_ALL_CARS } from "./queries";
import { GET_ALL_CARS_cars } from "./__generated__/GET_ALL_CARS";

class CarService {
  public async getAllCars(): Promise<GET_ALL_CARS_cars[]> {
    const response = await apolloClient
      .query({ query: GET_ALL_CARS })
      .catch((err) => {
        throw err;
      });

    if (response && response.data && response.data.cars) {
      return response.data.cars as GET_ALL_CARS_cars[];
    }
    return [];
  }
}

export default new CarService();
