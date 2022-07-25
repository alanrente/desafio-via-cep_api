import { Controller, Get, Param, Res } from '@nestjs/common';
import { Response } from 'express';
import { viaCep } from 'src/services/viacep';
import { ZipcodesService } from './zipcodes.service';

@Controller('zipcodes')
export class ZipcodesController {
  constructor(private readonly zipcodesService: ZipcodesService) {}

  @Get()
  async findAll() {
    return this.zipcodesService.findAll();
  }

  @Get(':zipcode')
  async findOne(@Param('zipcode') zipcode: string, @Res() resp: Response) {
    const infosZipCode = await this.zipcodesService.findOne(zipcode);

    if (!infosZipCode) {
      const infosViaCep = await viaCep(zipcode);

      this.zipcodesService.create(infosViaCep);

      return resp.status(201).send(infosViaCep);
    }

    return resp.send(infosZipCode);
  }
}
