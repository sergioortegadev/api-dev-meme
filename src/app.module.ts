import {
  MiddlewareConsumer,
  Module,
  NestModule,
  RequestMethod,
} from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { join } from 'path';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply((req, res, next) => {
        const filePath = join(__dirname, '..', '..', 'images', 'index.html');
        res.sendFile(filePath);
      })
      .forRoutes({ path: '/images', method: RequestMethod.GET });
  }
}
