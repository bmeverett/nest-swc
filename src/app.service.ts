import { Injectable } from '@nestjs/common';
import { InjectPinoLogger, PinoLogger } from 'nestjs-pino';

@Injectable()
export class AppService {
  constructor(@InjectPinoLogger(AppService.name) private logger: PinoLogger) {}
  getHello(): string {
    this.logger.info('Hello world!');
    return 'Hello World!';
  }
}
