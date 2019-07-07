import { Component, OnInit,NgModule } from '@angular/core';
import { Block } from '../block.model';
import {ActivatedRoute} from "@angular/router";
import { BlocksService } from "../blocks.service";
import { Transaction } from '../transaction.model';

@Component({
  selector: 'app-block-info-view',
  templateUrl: './block-info-view.component.html',
  styleUrls: ['./block-info-view.component.css']
})

export class BlockInfoViewComponent implements OnInit {
  private blockNumber_:number;
  private block_:Block=new Block();
  private prevBlock:Block=new Block();
  private blockTransactions:Transaction[];

  constructor(private route: ActivatedRoute,private blocksService:BlocksService) {
    this.route.params.subscribe( (num => {this.blockNumber_=<number>num['num'];} ));
  }

  getBlockByNumber(){
    this.blocksService.getBlockByNumber(this.blockNumber_).subscribe(
      (blck:Block)=>{
        this.block_=blck;
      }
    );
  }

  getPrevBlockByNumber(){
    this.blocksService.getBlockByNumber(this.blockNumber_-1).subscribe(
      (blck:Block)=>{
        this.prevBlock=blck;
      }
    )
  }

  getBlockTransactions(){
    this.blocksService.getBlockTransactions(this.blockNumber_).subscribe(
      (txs:Transaction[])=>{
        this.blockTransactions=txs;
      }
    )
  }

  ngOnInit() {
    this.getBlockByNumber();
    this.getPrevBlockByNumber();
    this.getBlockTransactions();
  }
}
