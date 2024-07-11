import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';
import 'dotenv/config';
import * as express from 'express';
import * as path from 'path';

const port = process.env.PORT;

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.use(
    '/images',
    express.static(path.join(__dirname, '..', '..', 'images')),
  );

  app.enableCors();
  await app.listen(port, () =>
    console.log(` ▒▓ Server ok on port: ${port} ▓▒`),
  );
}
bootstrap();
