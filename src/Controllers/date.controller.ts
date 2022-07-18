import { Controller, Get, HttpException, HttpStatus, Query } from "@nestjs/common";
import { DateService } from '../Services/date.service';
import { TemperatureService } from '../Services/temperature.service';
import { firstValueFrom } from 'rxjs';

@Controller()
export class DateController {
  constructor(private readonly dateService: DateService, private readonly temperatureService: TemperatureService) {}

  @Get('romandate')
  async getRomanDate(@Query('date') date) {
    var splittedDate = date.split('/');

    if (splittedDate.length < 3) {
      splittedDate = date.split('-');
    }

    if (splittedDate.length == 3) {
      var arabicDate = new Date(
        splittedDate[2] + '/' + splittedDate[1] + '/' + splittedDate[0],
      );

      var romanDate = this.dateService.getRomanDate(arabicDate);
      var temperature = await firstValueFrom(
        this.temperatureService.getTemperature(arabicDate),
      );
    } else {
      throw new HttpException(
        {
          status: HttpStatus.BAD_REQUEST,
          error:
            'Invalid date format, you should use DD-MM-YYYY, DD/MM/YYYY',
        },
        HttpStatus.BAD_REQUEST,
      );
    }

    //on passe en degrés celsius
    var minTemperature = temperature.main.temp_min - 273.15;
    var maxTemperature = temperature.main.temp_max - 273.15;

    return { romanDate: romanDate, minTemperature: minTemperature.toPrecision(4), maxTemperature: maxTemperature.toPrecision(4) };
  }
}
