import { Component, OnInit } from '@angular/core';

import { BlocksService } from '../blocks.service'; 
import { interval } from 'rxjs';
import { Block } from '../block.model';

@Component({
  selector: 'app-blocks-view',
  templateUrl: './blocks-view.component.html',
  styleUrls: ['./blocks-view.component.css']
})

export class BlocksViewComponent implements OnInit {
  p: number = 1;
  collection: any[];
  latestBlocks:Block[]=[];
  limit:Number=10;
  timer=interval(3000);
  constructor(private blocksService:BlocksService) { }

  ngOnInit() {
  this.getLatestBlocks();
  }
  getLatestBlocks(){
    this.timer.subscribe(
        ()=>{
        this.blocksService.getLatestBlocks().subscribe(
            (blocks:Block[])=>{
                this.latestBlocks=blocks;
            }
            )
        }
    )
    
  }
}
