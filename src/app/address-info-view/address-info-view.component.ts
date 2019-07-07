import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { AddressService } from '../address.service';
import { Address } from '../address.model';
import { chxBalanceInfo } from '../chxBalanceInfo.model';

@Component({
  selector: 'app-address-info-view',
  templateUrl: './address-info-view.component.html',
  styleUrls: ['./address-info-view.component.css']
})

export class AddressInfoViewComponent implements OnInit {
  private blockchainAddress:string;
  private address=new Address();

  constructor(private route: ActivatedRoute,private addressService:AddressService) { 
    this.route.params.subscribe( (bca=> {this.blockchainAddress=bca['bca'];} ));
  }

  ngOnInit() {
    this.getAddress();
  }

  getAddress(){
    this.addressService.getAddress(this.blockchainAddress).subscribe(
      (addr:Address)=>{
        this.address=addr;
      }
    )
  }
}
