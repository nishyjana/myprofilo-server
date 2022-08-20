import { Controller, Get } from '@nestjs/common';
import { CvService } from './cv.service';

@Controller('cv')
export class CvController {
  constructor(private readonly cvservice: CvService) {}

  @Get()
  getCV(): string {
    return this.cvservice.getHello();
  }
}
