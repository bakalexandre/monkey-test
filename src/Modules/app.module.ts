import { Module } from '@nestjs/common';
import { DateController } from '../Controllers/date.controller';
import { DateService } from '../Services/date.service';
import { AppController } from "../Controllers/app.controller";
import { AppService } from "../Services/app.service";
import { HttpModule } from "@nestjs/axios";
import { TemperatureService } from "../Services/temperature.service";

@Module({
  imports: [HttpModule],
  controllers: [DateController, AppController],
  providers: [DateService, TemperatureService, AppService],
})
export class AppModule {}
