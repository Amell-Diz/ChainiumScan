import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map }  from 'rxjs/operators';
import { OwnApiResponse } from './ownapiresponse.model';

@Injectable({
  providedIn: 'root'
})

export class BlocksService {
  private apiBaseUrl_:string='http://localhost:9090/';
  private apiGetBlocksUrl_:string=this.apiBaseUrl_+'blocks';
  private apiGetBlockByNumber_:string=this.apiBaseUrl_+'block/';

  private blockNumber_:string;
  
  constructor(private http: HttpClient) { }
  
  getBlockByNumber(num:number){
    return this.http.get<OwnApiResponse>(this.apiGetBlockByNumber_+num).pipe(
      map(ret=>{return ret.data;})
    );
  }
  getLatestBlocks(){
    return this.http.get<OwnApiResponse>(this.apiGetBlocksUrl_).pipe(
      map(ret=>{return ret.data;})
    );
  }

  getBlockTransactions(num:number){
    return this.http.get<OwnApiResponse>(this.apiGetBlockByNumber_+num+'/transactions').pipe(
      map(ret=>{return ret.data;})
    );
  }
}