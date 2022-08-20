import { Injectable } from '@nestjs/common';

@Injectable()
export class CvService {
  getHello(): string {
    return 'Hello World cv!';
  }
}
