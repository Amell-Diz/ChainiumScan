import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';
import { userDataService } from '../services/user-data-service.service';

@Pipe({
  name: 'dateFormatPipe',
})
export class DateFormatPipePipe implements PipeTransform {
  timeZone:string;
  constructor(public _userData: userDataService) {
      var date = new Date();
      this.timeZone = this._userData.getLocalTimeZone(date);
  }
  transform(value: string) {
      var datePipe = new DatePipe("en-US");
      value = datePipe.transform(value, 'MMM dd yyyy') +' '+ this.timeZone;
      return value;
  }
}
