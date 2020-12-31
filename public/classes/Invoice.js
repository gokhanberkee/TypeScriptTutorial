//classes
export class Invoice {
    constructor(client, details, amount) {
        this.client = client;
        this.details = details;
        this.amount = amount;
        console.log(`Bu site ${this.client} kişisine aittir.`);
    }
    format() {
        return `${this.client} owes $${this.amount} for ${this.details}`;
    }
}
