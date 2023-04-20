import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { useContainer } from 'class-validator';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true, //ignora tudo que não esta no DTO
      forbidNonWhitelisted: true, // lançar um erro se mandar dado que nao esta no DTO
    }),
  );

  useContainer(app.select(AppModule), { fallbackOnErrors: true }); // class-validator resolve dependencias igual o nest

  await app.listen(3000);
}
bootstrap();
