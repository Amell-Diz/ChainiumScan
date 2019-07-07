import { Component, OnInit } from '@angular/core';

import { BlocksService } from '../blocks.service'; 
import { interval } from 'rxjs';
import { Transaction } from '../transaction.model';
import { Block } from '../block.model';

@Component({
  selector: 'app-blocks',
  templateUrl: './blocks.component.html',
  styleUrls: ['./blocks.component.css']
})
export class BlocksComponent implements OnInit {

  latestBlocks:Block[]=new Array;

  constructor(private blocksService:BlocksService) { }

  ngOnInit() {
    this.getLatestBlocks();
  }

  getLatestBlocks(){
    this.blocksService.getLatestBlocks().subscribe(
      (blocks:Block[])=>{
        this.latestBlocks=blocks;
      }
    )
  }
}