import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable, of, Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TxPerDayService {

  constructor(private _http: HttpClient) {}

    txPerDay() {
      return this._http.get("http://localhost:9090/stat/tx-per-day?numberOfDays=7") 
        .pipe(map(result => result));
    }
  
}

