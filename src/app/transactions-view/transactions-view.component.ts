import { Component, OnInit } from '@angular/core';

import { TransactionsService } from '../transactions.service';
import { Transaction } from '../transaction.model';
import {interval} from 'rxjs';

@Component({
  selector: 'app-transactions-view',
  templateUrl: './transactions-view.component.html',
  styleUrls: ['./transactions-view.component.css']
})
export class TransactionsViewComponent implements OnInit {
    p: number = 1;
    collection: any[];
    timer=interval(3000);
    latestTransactions:Transaction[];
    limit:number;

  
  
  constructor(private transactionsService:TransactionsService) { }

  ngOnInit() {
  this.getLatestTransactions();
  }
  
  getLatestTransactions(){
    this.timer.subscribe(
        ()=>{
          this.transactionsService.getTransactions().subscribe(
              (txs:Transaction[])=>{
                this.latestTransactions=txs;
              }
            )
        }
    )
  
}
}
