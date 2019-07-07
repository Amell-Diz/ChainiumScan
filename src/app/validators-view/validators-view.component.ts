import { Component, OnInit } from '@angular/core';

import { ValidatorsService } from '../validators.service';
import { Validator } from '../validator.model';

@Component({
  selector: 'app-validators-view',
  templateUrl: './validators-view.component.html',
  styleUrls: ['./validators-view.component.css']
})
export class ValidatorsViewComponent implements OnInit {
  private validators:Validator[];

  constructor(private validatorsService:ValidatorsService) { }

  ngOnInit() {
    this.getValidators();
  }

  getValidators(){
    this.validatorsService.getValidators().subscribe(
      (valds: Validator[])=>{
        this.validators=valds;
      }
    )
  }
}
