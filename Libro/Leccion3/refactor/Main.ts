import {Bebida} from './Bebida';
import {Espresso} from './Espresso';
import {Leche} from './Leche';
import {Soja} from './Soja';

var bebida1:Bebida = new Espresso('Cafe expresso',155);
bebida1 = new Leche(bebida1,10)
bebida1 = new Leche(bebida1,10);
bebida1 = new Soja(bebida1,5);

console.log('Bebida1->descripcion: '+bebida1.getDescripcion()+' costo: '+bebida1.costo()+'$');