import { Test, TestingModule } from '@nestjs/testing';
import { DateController } from './Date.controller';
import { DateService } from '../Services/date.service';
import { TemperatureService } from '../Services/temperature.service';
import { HttpModule, HttpService } from '@nestjs/axios';

describe('DateController', () => {
  let dateController: DateController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [DateController],
      providers: [DateService, TemperatureService],
      imports: [HttpModule],
    }).compile();

    dateController = app.get<DateController>(DateController);
  });

  describe('getRomanDate', () => {
    it('should be defined', () => {
      const response = dateController.getRomanDate('14/07/2022');
      expect(response).toBeDefined();
    });
  });
});
