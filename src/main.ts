import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      // Only required list of inputs are accepted
      whitelist: true,
      //forbiden input validation pipeline
      forbidNonWhitelisted: true,
    }),
  );
  await app.listen(3000);
}
bootstrap();
