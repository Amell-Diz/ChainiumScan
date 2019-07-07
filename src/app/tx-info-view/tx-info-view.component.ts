import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Transaction } from '../transaction.model';
import { TransactionsService } from '../transactions.service';

@Component({
  selector: 'app-tx-info-view',
  templateUrl: './tx-info-view.component.html',
  styleUrls: ['./tx-info-view.component.css']
})
export class TxInfoViewComponent implements OnInit {
  private txHash_:string;
  private tx:Transaction=new Transaction();

  constructor(private route: ActivatedRoute,private txService:TransactionsService) { 
    this.route.params.subscribe( (hash=> {this.txHash_=hash['hash'];} ));

  }

  ngOnInit() {
    this.getTransactionByHash();
  }

  getTransactionByHash(){
    this.txService.getTransactionByHash(this.txHash_).subscribe(
      (tx:Transaction)=>{
        this.tx=tx;
      }
    )
  }
}
