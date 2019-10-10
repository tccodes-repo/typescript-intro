import { IPerson, PersonQueue } from './mod';

const me: IPerson = {
    firstName: 'Derek',
    lastName: 'Smith',
    age: 38
}

const personQueue = new PersonQueue();
personQueue.push(me);

function showPerson(person: IPerson): string {
    let html: string = '<div>';
    html += `<div><label>First Name:</label><span>${person.firstName}</span></div>`;
    html += `<div><label>Last Name:</label><span>${person.lastName}</span></div>`;
    html += '</div>';
    return html;
}

const content = document.getElementById('content');

if (content) {
    content.innerHTML = showPerson(me);
}