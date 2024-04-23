import { Status } from '@prisma/client';
import { IsEnum, IsNumber } from 'class-validator';

export class CreateApplicationDto {
  @IsNumber()
  customerId: number;

  @IsNumber()
  carrierId: number;
}

export class UpdateApplicationDto {
  @IsNumber()
  customerId: number;

  @IsNumber()
  carrierId: number;

  @IsEnum(Status)
  status: Status;
}
