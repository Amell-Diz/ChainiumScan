import { Component, OnInit } from '@angular/core';
import { Chart } from 'node_modules/chart.js';
import { TxPerDayService } from '../charts/tx-per-day.service';

@Component({
  selector: 'app-main-view',
  templateUrl: './main-view.component.html',
  styleUrls: ['./main-view.component.css']
})
export class MainViewComponent implements OnInit {

    LineChart;

    constructor(private _txPerDay: TxPerDayService){}
  
      ngOnInit (){
              this.getTxPerDay();
      }
  
      getTxPerDay() {
          this._txPerDay.txPerDay()
          .subscribe(res => {
              
              let day = res['data'].map(res => res.key)
              let txPerDayData = res['data'].map(res => res.value)
  
              this.LineChart = new Chart('lineChart', {
                  type: 'line',
                  data: {
                      labels: txPerDayData,
                      datasets: [
                          {
                              data: day,
                              borderColor: 'red',
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
                              display: true
                          }],
                          yAxes: [{
                              display: true
                          }]
                      }
                  }
              })
          })
      }
}