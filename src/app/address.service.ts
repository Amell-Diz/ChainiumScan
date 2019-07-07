import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map }  from 'rxjs/operators';

import { OwnApiResponse } from './ownapiresponse.model';

@Injectable({
  providedIn: 'root'
})
export class AddressService {
  private apiBaseUrl_:string='http://localhost:9090/';
  private apiAddress_:string=this.apiBaseUrl_+'address/';

  constructor(private http:HttpClient) { }

  getAddress(bca){
    return this.http.get<OwnApiResponse>(this.apiAddress_+bca).pipe(
      map(ret=>{return ret.data;console.log(ret.data);})
    )
  }
}
