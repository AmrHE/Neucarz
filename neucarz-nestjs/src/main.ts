import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  //Global Error Handler
  // app.useGlobalFilters(new BaseExceptionFilter());

  //Add Validation pipeling middleware into the middleware stack
  app.useGlobalPipes(new ValidationPipe());

  //Enales CORS
  app.enableCors();

  await app.listen(process.env.PORT);
}
bootstrap();
