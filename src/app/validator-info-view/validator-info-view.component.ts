import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

import { ValidatorsService } from '../validators.service';
import { Validator } from '../validator.model';

@Component({
  selector: 'app-validator-info-view',
  templateUrl: './validator-info-view.component.html',
  styleUrls: ['./validator-info-view.component.css']
})
export class ValidatorInfoViewComponent implements OnInit {
  private validator_:Validator=new Validator();
  private valAddress:number;

  constructor(private route: ActivatedRoute,private validatorsService:ValidatorsService){
    this.route.params.subscribe( (addr => {this.valAddress=<number>addr['addr'];} ));
   }

  ngOnInit() {
    this.getValidatorByAddress();
  }
  
  getValidatorByAddress(){
    this.validatorsService.getValidatorByAddress(this.valAddress).subscribe(
      (val:Validator)=>{
        this.validator_=val;
      }
    );
  }
}
