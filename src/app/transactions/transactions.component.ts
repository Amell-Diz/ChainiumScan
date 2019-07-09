import { Component, OnInit, Input } from '@angular/core';
import { DecimalPipe } from '@angular/common/';

import { TransactionsService } from '../transactions.service';
import { Transaction } from '../transaction.model';

import {interval} from 'rxjs';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {
  parseInteger(num:string){
    return parseInt(num);
  }
  latestTransactions:Transaction[];

  timer=interval(3000);

  constructor(private transactionsService:TransactionsService) { }

  ngOnInit(){
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