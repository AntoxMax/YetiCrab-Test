import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateCarrierDto } from './carrier.dto';
import { CarrierService } from './carrier.service';

@Controller('carrier')
export class CarrierController {
  constructor(private readonly carrierService: CarrierService) {}

  @Get()
  async getAll() {
    return this.carrierService.getAll();
  }

  @UsePipes(new ValidationPipe())
  @Post()
  async createCarrier(@Body() CarrierData: CreateCarrierDto) {
    return this.carrierService.createCarrier(CarrierData);
  }

  @Delete(':id')
  async deleteCarrier(@Param('id') id: string) {
    return this.carrierService.deleteCarrier(+id);
  }
}
