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
      this._txPerDay.txPerDay()
        .subscribe(res => {
          let ValuePerDay = res ['data'].map(res => res.value)
          let TimestampPerWeek = res ['data'].map(res => res.key)

          let day = [];
          let month = [];
          
          TimestampPerWeek.forEach(function(item){
            let store = item.split(/\D/)
            day.push(store[2]);
            month.push(store[1])
          })
          console.log(TimestampPerWeek)
          this.chart = new Chart('canvas', {
            type: 'line',
            data: {
              labels: TimestampPerWeek,
              datasets: [
                {
                  data: ValuePerDay, 
                  borderColor: '#3cba9f',
                  fill: false
                },
              ]
            },
            options: {
              legend: {
                display: false
              },
              scales: {
                xAxes: [{
                  display:true
                }],
                yAxes: [{
                  display:true
                }]
              }
            }
          })
        })
    }
}
