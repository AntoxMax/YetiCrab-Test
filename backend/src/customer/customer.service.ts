import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma.service';
import { CreateCustomerDto } from './customer.dto';

@Injectable()
export class CustomerService {
  constructor(private prisma: PrismaService) {}

  async getAll() {
    return this.prisma.customer.findMany({});
  }

  async getById(id: number) {
    return this.prisma.customer.findUnique({
      where: {
        id: id,
      },
    });
  }

  async createCustomer(CustomerData: CreateCustomerDto) {
    const customer = await this.prisma.customer.create({
      data: {
        name: CustomerData.name,
      },
    });

    return customer.id;
  }
  async updateCustomer(id: number, CustomerData: CreateCustomerDto) {
    const customer = await this.prisma.customer.update({
      where: {
        id: id,
      },
      data: {
        name: CustomerData.name,
      },
    });

    return customer.id;
  }

  async deleteCustomer(id: number) {
    return this.prisma.customer.delete({ where: { id } });
  }
}
