import { Injectable } from '@angular/core';

@Injectable()
export class userDataService {
 _timezone: any = null;
 _timeZoneAbbr: any
 getLocalTimeZone(dateInput: any) {
   if (this._timezone) return this._timezone;

   var dateObject = dateInput || new Date(),
   dateString = dateObject + ""

   this._timeZoneAbbr = (
     dateString.match(/\(([^\)]+)\)$/) ||
     dateString.match(/([A-Z]+) [\d]{4}$/)
   );

  if (this._timeZoneAbbr) {
   this._timeZoneAbbr = this._timeZoneAbbr[1].match(/[A-Z]/g).join("");
  }

  if (!this._timeZoneAbbr && /(GMT\W*\d{4})/.test(dateString)) {
   return RegExp.$1;
  }

  this._timezone = this._timeZoneAbbr;
  return this._timeZoneAbbr;
 };

}