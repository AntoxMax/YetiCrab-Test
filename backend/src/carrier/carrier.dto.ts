import { IsNumber, IsString } from 'class-validator';

export class CreateCarrierDto {
  @IsString()
  name: string;

  @IsString()
  phone: string;

  @IsNumber()
  ati: number;
}
