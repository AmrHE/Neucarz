// eslint-disable-next-line prettier/prettier
import { Module } from '@nestjs/common';
import { CarsModule } from './cars/cars.module';
@Module({
  imports: [CarsModule],
})
export class ComponentsModule {}
