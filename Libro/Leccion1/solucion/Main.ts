import PatoGoma from './PatoGoma';
import PatoRojo from './PatoRojo';

let pato1 = new PatoGoma();
let pato2 = new PatoRojo();

pato1.setVuelo();
pato2.setVuelo();
console.log('pato1.volar(): ',pato1.vuelo.volar());
console.log('pato2.volar(): ',pato2.vuelo.volar());