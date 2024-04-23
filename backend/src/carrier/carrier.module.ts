import { Module } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CarrierController } from './carrier.controller';
import { CarrierService } from './carrier.service';

@Module({
  controllers: [CarrierController],
  providers: [CarrierService, PrismaService],
})
export class CarrierModule {}
