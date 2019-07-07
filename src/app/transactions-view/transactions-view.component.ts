import { Component, OnInit } from '@angular/core';

import { TransactionsService } from '../transactions.service';
import { Transaction } from '../transaction.model';

@Component({
  selector: 'app-transactions-view',
  templateUrl: './transactions-view.component.html',
  styleUrls: ['./transactions-view.component.css']
})
export class TransactionsViewComponent implements OnInit {
  latestTransactions:Transaction[];
  limit:Number=5;
  
  constructor(private tranactionsService:TransactionsService) { }

  ngOnInit() {
  this.getLatestTransactions();
  }
  
  getLatestTransactions(){
    this.tranactionsService.getTransactions().subscribe(
      (txs:Transaction[])=>{
        this.latestTransactions=txs;
      }
    )
  }
}
