import { Payment } from './classes/Payment.js';
import { HasFormatter } from './interfaces/HasFormatter.js';
import { Invoice }  from './classes/Invoice.js'
import { ListTemplate } from './classes/ListTemplate.js';
//interfaces
interface IsPerson {
    name: string;
    age: number;
    speak(a: string): void;
    spend(a: number): number;
}

const me: IsPerson = {
    name: 'Gökhan',
    age: 25,
    speak(text: string): void {
        console.log(text);
    },
    spend(no: number): number {
        console.log('I spent', no);
        return no;
    }
};

const greetPerson = (person: IsPerson) => {
    console.log('hello', person.name)
}
greetPerson(me);

console.log(me);

let docOne: HasFormatter;
let docTwo: HasFormatter;

docOne = new Invoice('Burak', 'FullStack', 250);
docTwo = new Payment('Gökhan', 'FrontEnd', 231);

let docs: HasFormatter[] = [];
docs.push(docOne);
docs.push(docTwo);

console.log(docs);

const invOne = new Invoice('Gökhan', 'Work on Gökhans site',23);
const invTwo = new Invoice('Ömer', 'Work on Ömers site',36);

console.log(invOne.format());

let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(new Invoice('Berrak', 'Work on Berraks site',55));

invoices.forEach(inv =>{
    
    console.log(inv.client, inv.details, inv.amount, inv.format());
})


invTwo.amount = 400;

console.log(invoices);


const form = document.querySelector('.new-item-form') as HTMLFormElement;



//inputs
const type = document.querySelector('#type') as HTMLSelectElement;
const tofrom = document.querySelector('#tofrom') as HTMLInputElement;
const details = document.querySelector('#details') as HTMLInputElement;
const amount = document.querySelector('#amount') as HTMLInputElement;

//list template instance
const ul = document.querySelector('ul')!;
const list = new ListTemplate(ul);

form.addEventListener('submit',(e:Event) => {
    e.preventDefault();

    let doc: HasFormatter;
    if (type.value === 'Invoice'){
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber)
    } else{
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber)
    }
    list.render(doc,type.value,'end');
})


