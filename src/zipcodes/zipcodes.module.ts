import { Module } from '@nestjs/common';
import { ZipcodesService } from './zipcodes.service';
import { ZipcodesController } from './zipcodes.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Zipcode } from './entities/zipcode.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Zipcode])],
  controllers: [ZipcodesController],
  providers: [ZipcodesService],
})
export class ZipcodesModule {}
