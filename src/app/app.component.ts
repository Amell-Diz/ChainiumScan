import { Component } from '@angular/core';
import { TxPerDayService } from './charts/tx-per-day.service';
import { Chart } from 'chart.js';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Timestamp } from 'rxjs/internal/operators/timestamp';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ChainiumScan';

  chart: [];

  constructor(private _txPerDay: TxPerDayService){}

    ngOnInit (){
      
    }
}
