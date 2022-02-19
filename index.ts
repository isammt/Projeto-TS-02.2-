// Import stylesheets]
import { Person } from './person';
import './style.css';

let humano = new Person('Isabella', 'Mercedes', 'Trigo', 22);

// Write TypeScript code!
const appDiv: HTMLElement = document.getElementById('app');
appDiv.innerHTML = `<h1>TypeScript Starter</h1>`;
const nome: HTMLElement = document.getElementById('name');
const idade: HTMLElement = document.getElementById('age');
nome.innerHTML = humano.getFullName();
idade.innerHTML += ' ' + humano.getBirthdayYear();
