import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ApplicationModule } from './application/application.module';
import { CarrierModule } from './carrier/carrier.module';
import { CustomerModule } from './customer/customer.module';
import { PrismaService } from './prisma.service';
import { CommentModule } from './comment/comment.module';

@Module({
  imports: [CustomerModule, CarrierModule, ApplicationModule, CommentModule],
  controllers: [AppController],
  providers: [AppService, PrismaService],
})
export class AppModule {}
