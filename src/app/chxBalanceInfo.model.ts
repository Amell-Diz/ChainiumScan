export class chxBalanceInfo{
    availableBalance:number;
    delegatedStakes:number;
    validatorDeposit:number;
    totalBalance:number;

    constructor(){
        this.availableBalance=0;
        this.delegatedStakes=0;
        this.validatorDeposit=0;
        this.totalBalance=0;
    }
}
