import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateCustomerDto } from './customer.dto';
import { CustomerService } from './customer.service';

@Controller('customer')
export class CustomerController {
  constructor(private readonly customerService: CustomerService) {}

  @Get()
  async getAll() {
    return this.customerService.getAll();
  }

  @Get('/:id')
  async getById(@Param('id') id: string) {
    return this.customerService.getById(+id);
  }

  @UsePipes(new ValidationPipe())
  @Post()
  async createCustomer(@Body() CustomerData: CreateCustomerDto) {
    return this.customerService.createCustomer(CustomerData);
  }

  @UsePipes(new ValidationPipe())
  @Patch('/:id')
  async updateCustomer(
    @Param('id') id: string,
    @Body() CustomerData: CreateCustomerDto,
  ) {
    return this.customerService.updateCustomer(+id, CustomerData);
  }

  @Delete('/:id')
  async deleteCustomer(@Param('id') id: string) {
    return this.customerService.deleteCustomer(+id);
  }
}
