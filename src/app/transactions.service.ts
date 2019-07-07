import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map }  from 'rxjs/operators';
import { OwnApiResponse } from './ownapiresponse.model';

@Injectable({
  providedIn: 'root'
})
export class TransactionsService {
  private apiBaseUrl_:string='http://localhost:9090/';
  private apiTransactionsUrl_=this.apiBaseUrl_+'txs';
  private apiTransactionByHashUrl_=this.apiBaseUrl_+'tx/';
 
  constructor(private http:HttpClient) { }

  getTransactions(){
    return this.http.get<OwnApiResponse>(this.apiTransactionsUrl_).pipe(
      map(ret=>{return ret.data;})
    );
  }
  getTransactionByHash(hash){
    return this.http.get<OwnApiResponse>(this.apiTransactionByHashUrl_+hash).pipe(
      map(ret=>{return ret.data;})
    );
  }
}
