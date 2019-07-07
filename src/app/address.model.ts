import { chxBalanceInfo } from './chxBalanceInfo.model';

export class Address{
    blockchainAddress:string;
    nonce: number;
    chxBalanceInfo:chxBalanceInfo;

    constructor(){
        this.blockchainAddress='';
        this.nonce=0;
        this.chxBalanceInfo=new chxBalanceInfo();
    }
}