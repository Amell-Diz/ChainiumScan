import { Component, OnInit } from '@angular/core';
import { StatsService } from '../stats.service';
import { interval } from 'rxjs';

@Component({
  selector: 'app-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.css']
})
export class StatsComponent implements OnInit {

  constructor(private service:StatsService) { }
 
  ngOnInit() {
  }
}