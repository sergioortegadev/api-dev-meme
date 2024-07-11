import { Controller, Get, Req, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Request, Response } from 'express';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getMeme(@Req() request: Request, @Res() response: Response) {
    (async () => {
      const data = await this.appService.getMeme();
      try {
        if (data.data) {
          return response.status(200).json(data);
        } else {
          data.message = `${data.message} │ Error en DB - No Data`;
          data.data = {
            id: '00',
            image: '/images/noimage.jpg',
          };
          return response.status(207).json(data);
        }
      } catch (error) {
        const message = new Error(`Error en DB - No Data │ ${error}`);
        console.warn(message);
        return response.status(2007).json(data);
      }
    })();
  }
  @Get('/healthcheck')
  getHealthCheck(): string {
    return this.appService.getHealthcheck();
  }
}
