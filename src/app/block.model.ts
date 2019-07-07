import { Transaction } from "./transaction.model";

export class Block{
    blockNumber:number;
    hash:string;
    previousBlockHash:string;
    timestamp:string;
    validatorAddress:string;
    txSetRoot:string;
    txResultSetRoot:string;
    equivocationProofsRoot:string;
    equivocationProofResultsRoot:string;
    stateRoot:string;
    stakingRewardsRoot:string;
    configurationRoot:string;
    configuration:string;
    consensusRound:number;
    signatures:string[];

    constructor(){
        this.blockNumber=0;
        this.hash='N/A';
        this.timestamp='N/A';
        this.previousBlockHash='N/A';
        this.validatorAddress='N/A';
        this.txSetRoot='N/A';
        this.txResultSetRoot='N/A';
        this.txResultSetRoot="N/A";
        this.equivocationProofsRoot='N/A';
        this.equivocationProofResultsRoot='N/A';
        this.stateRoot='N/A';
        this.stakingRewardsRoot='N/A';
        this.configurationRoot='N/A';
        this.configuration='N/A';
        this.consensusRound=0;
        this.signatures=null;
    }
}
