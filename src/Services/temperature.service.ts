import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { map } from 'rxjs';

@Injectable()
export class TemperatureService {
  constructor(private readonly httpService: HttpService) {}

  getTemperature(arabicDate) {
    // return this.httpService
    //   .get('https://www.metaweather.com/api/location/search/?query=paris')
    //   .pipe(
    //     map((response) => {
    //       var woid = response.data.woid;
    //
    //       this.httpService
    //         .get(
    //           'https://www.metaweather.com/api/location/'+woid+'/'+arabicDate.getFullYear()+'/'+(arabicDate.getMonth()+1)+'/'+arabicDate.getDate()+'/',
    //         )
    //         .pipe(map((response) => response.data));
    //     }),
    //   );

    return this.httpService
      .get(
        'https://api.openweathermap.org/data/2.5/weather?appid=fbae220bb53e6914e832685dd134ea14&q=paris',
      )
      .pipe(map((response) => response.data));
  }
}
