/* eslint-disable prettier/prettier */
import { Field, InputType, Int } from '@nestjs/graphql';
import { Max, Min } from 'class-validator';

@InputType()
export class NewCarInput {
  // @Field()
  // id: string;

  @Field()
  name: string;

  @Field((type) => Int)
  @Max(1000, { message: "Monthly price can't be higher than $1000" })
  @Min(10, { message: "Daily price can't be lower than $10" })
  dailyPrice: number;

  @Field((type) => Int)
  @Max(20000, { message: "Monthly price can't be higher than $20000" })
  @Min(1500, { message: "Monthly price can't be lower than $1500" })
  monthlyPrice: number;

  @Field()
  mileage: string;

  @Field()
  gearType: string;

  @Field()
  gas: string;

  @Field()
  thumbnailUrl: string;
}
