import {Pizza} from './Pizza';

class ChicagoStylePizzaStore extends Pizza {
    constructor(){
        super();
        this.nombre ='Pizza del Store de estilo Chicago';
        this.salsa ='Salsa Picante';
        this.masa ='Masa fina y blanda';
        this.ingredientes.push('Queso Fresco');
    }
    public cortar():void{
        console.log('Cortando pizza estilo Chicago en cuadrados...');
    }
}

export {ChicagoStylePizzaStore}