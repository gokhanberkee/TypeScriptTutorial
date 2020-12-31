import { Payment } from './classes/Payment.js';
import { Invoice } from './classes/Invoice.js';
import { ListTemplate } from './classes/ListTemplate.js';
const me = {
    name: 'Gökhan',
    age: 25,
    speak(text) {
        console.log(text);
    },
    spend(no) {
        console.log('I spent', no);
        return no;
    }
};
const greetPerson = (person) => {
    console.log('hello', person.name);
};
greetPerson(me);
console.log(me);
let docOne;
let docTwo;
docOne = new Invoice('Burak', 'FullStack', 250);
docTwo = new Payment('Gökhan', 'FrontEnd', 231);
let docs = [];
docs.push(docOne);
docs.push(docTwo);
console.log(docs);
const invOne = new Invoice('Gökhan', 'Work on Gökhans site', 23);
const invTwo = new Invoice('Ömer', 'Work on Ömers site', 36);
console.log(invOne.format());
let invoices = [];
invoices.push(invOne);
invoices.push(new Invoice('Berrak', 'Work on Berraks site', 55));
invoices.forEach(inv => {
    console.log(inv.client, inv.details, inv.amount, inv.format());
});
invTwo.amount = 400;
console.log(invoices);
const form = document.querySelector('.new-item-form');
//inputs
const type = document.querySelector('#type');
const tofrom = document.querySelector('#tofrom');
const details = document.querySelector('#details');
const amount = document.querySelector('#amount');
//list template instance
const ul = document.querySelector('ul');
const list = new ListTemplate(ul);
form.addEventListener('submit', (e) => {
    e.preventDefault();
    let doc;
    if (type.value === 'Invoice') {
        doc = new Invoice(tofrom.value, details.value, amount.valueAsNumber);
    }
    else {
        doc = new Payment(tofrom.value, details.value, amount.valueAsNumber);
    }
    list.render(doc, type.value, 'end');
});
