import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { CreateApplicationDto, UpdateApplicationDto } from './application.dto';
import { ApplicationService } from './application.service';

@Controller('application')
export class ApplicationController {
  constructor(private readonly applicationService: ApplicationService) {}

  @Get()
  async getAll() {
    return this.applicationService.getAll();
  }

  @Get('/filter')
  async getFilteredApplication(
    @Query('search') searchById: string,
    @Query('finished') finished: string,
    @Query('carriers') carriers: string,
    @Query('customers') customers: string,
    @Query('order') order: `asc` | `desc`,
  ) {
    return this.applicationService.getFilteredApplication(
      finished,
      carriers,
      customers,
      order,
      +searchById,
    );
  }

  // @Get('/:id')
  // async getById(@Param('id') id: string) {
  //   return this.applicationService.getById(+id);
  // }

  @UsePipes(new ValidationPipe())
  @Post()
  async createApplication(@Body() ApplicationData: CreateApplicationDto) {
    return this.applicationService.createApplication(ApplicationData);
  }

  @UsePipes(new ValidationPipe())
  @Patch('/:id')
  async updateApplication(
    @Param('id') id: string,
    @Body() ApplicationData: UpdateApplicationDto,
  ) {
    return this.applicationService.updateApplication(+id, ApplicationData);
  }

  @Delete('/:id')
  async deleteApplication(@Param('id') id: string) {
    return this.applicationService.deleteApplication(+id);
  }
}
