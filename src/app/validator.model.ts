export class Validator{
    blockchainAddress:string;
    networkAddress:string;
    sharedRewardPercent:number;
    isActive:boolean;
    stakes:any[];

    constructor(){
        this.blockchainAddress='';
        this.networkAddress='';
        this.sharedRewardPercent=0;
        this.isActive=false;
        this.stakes=null;
    }
}