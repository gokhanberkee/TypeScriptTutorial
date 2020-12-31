import { HasFormatter } from '../interfaces/HasFormatter.js'

//classes
export class Invoice implements HasFormatter{
    constructor(
        readonly client: string,
        readonly details: string,
        public amount: number,
    ){        
        console.log(`Bu site ${this.client} kişisine aittir.`)
    }

    format(){
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}