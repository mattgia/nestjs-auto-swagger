import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {

  const app = await NestFactory.create(AppModule);

  // configure swagger - wire routes
  const config = new DocumentBuilder()
    .setTitle('NestJS Example App')
    .setDescription('Description about your app')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // start app
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
