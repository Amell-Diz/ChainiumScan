import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map }  from 'rxjs/operators';

import { Validator } from './validator.model';
import { OwnApiResponse } from './ownapiresponse.model';

@Injectable({
  providedIn: 'root'
})
export class ValidatorsService {
  private apiBaseUrl_:string='http://localhost:9090/';
  private apiValidators_:string=this.apiBaseUrl_+'validators';
  private apiValidatorByAddress_:string=this.apiBaseUrl_+'validator/';

  constructor(private http:HttpClient) { }

  getValidators(){
    return this.http.get<OwnApiResponse>(this.apiValidators_).pipe(
      map(ret=>{return ret.data;})
    );
  }

  getValidatorByAddress(addr){
    return this.http.get<OwnApiResponse>(this.apiValidatorByAddress_+addr).pipe(
      map(ret=>{return ret.data;})
    );
  }
}
