import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateCarrierDto } from './carrier.dto';

@Injectable()
export class CarrierService {
  constructor(private prisma: PrismaService) {}

  async getAll() {
    return this.prisma.carrier.findMany({});
  }

  async createCarrier(CarrierData: CreateCarrierDto) {
    const carrier = await this.prisma.carrier.create({
      data: {
        name: CarrierData.name,
        phone: CarrierData.phone,
        ati: CarrierData.ati,
      },
    });

    return carrier.id;
  }

  async deleteCarrier(id: number) {
    return this.prisma.carrier.delete({ where: { id } });
  }
}
