import { HasFormatter } from '../interfaces/HasFormatter.js'

//classes
export class Payment implements HasFormatter{
    constructor(
        readonly recipient: string,
        readonly details: string,
        public amount: number,
    ){}

    format(){
        return `${this.recipient} owes $${this.amount} for ${this.details}`;
    }
}