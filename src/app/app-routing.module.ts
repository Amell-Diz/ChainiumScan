import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { MainViewComponent } from './main-view/main-view.component';
import { BlockInfoViewComponent } from './block-info-view/block-info-view.component';
import { BlocksViewComponent } from './blocks-view/blocks-view.component';
import { TransactionsViewComponent } from './transactions-view/transactions-view.component';
import { TxInfoViewComponent } from './tx-info-view/tx-info-view.component';
import { ValidatorsViewComponent } from './validators-view/validators-view.component';
import { AddressInfoViewComponent } from './address-info-view/address-info-view.component';
import { ValidatorInfoViewComponent } from './validator-info-view/validator-info-view.component';

const routes: Routes = [
  { path: '', component: MainViewComponent },
  { path: 'blocks/:num', component: BlockInfoViewComponent },
  { path: 'transactions/:hash', component: TxInfoViewComponent },
  { path: 'blocks', component: BlocksViewComponent },
  { path: 'transactions', component: TransactionsViewComponent },
  { path: 'validators', component: ValidatorsViewComponent },
  { path: 'addresses/:bca', component: AddressInfoViewComponent },
  { path: 'validators/:addr', component: ValidatorInfoViewComponent }
];

@NgModule({
  exports: [ RouterModule ],
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ]
})
export class AppRoutingModule { }