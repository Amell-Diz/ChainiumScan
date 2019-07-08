import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule}  from '@angular/common/http';

import { AppComponent } from './app.component';
import { TransactionsComponent } from './transactions/transactions.component';
import { TransactionsService } from './transactions.service';
import { BlocksComponent } from './blocks/blocks.component';
import { StatsComponent } from './stats/stats.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchComponent } from './search/search.component';
import { AppRoutingModule } from './app-routing.module';
import { MainViewComponent } from './main-view/main-view.component';
import { FooterComponent } from './footer/footer.component';
import { BlockInfoViewComponent } from './block-info-view/block-info-view.component';
import { FormsModule } from '@angular/forms';
import { BlocksViewComponent } from './blocks-view/blocks-view.component';
import { TransactionsViewComponent } from './transactions-view/transactions-view.component';
import { TxInfoViewComponent } from './tx-info-view/tx-info-view.component';
import { ValidatorsViewComponent } from './validators-view/validators-view.component';
import { AddressInfoViewComponent } from './address-info-view/address-info-view.component';
import { ValidatorInfoViewComponent } from './validator-info-view/validator-info-view.component';
import { DateFormatPipePipe } from './pipes/date-format-pipe.pipe';
import { TxPerDayService } from './charts/tx-per-day.service';
import { NgxPaginationModule } from 'ngx-pagination';
import {TimeAgoPipe} from 'time-ago-pipe';



@NgModule({
  declarations: [
    AppComponent,
    TransactionsComponent,
    BlocksComponent,
    StatsComponent,
    NavbarComponent,
    SearchComponent,
    MainViewComponent,
    FooterComponent,
    BlockInfoViewComponent,
    BlocksViewComponent,
    TransactionsViewComponent,
    TxInfoViewComponent,
    ValidatorsViewComponent,
    AddressInfoViewComponent,
    ValidatorInfoViewComponent,
    DateFormatPipePipe,
    TimeAgoPipe

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    NgxPaginationModule
  ],
  exports: [
    DateFormatPipePipe
  ],
  providers: [TransactionsService, TxPerDayService],
  bootstrap: [AppComponent]
})
export class AppModule { }
