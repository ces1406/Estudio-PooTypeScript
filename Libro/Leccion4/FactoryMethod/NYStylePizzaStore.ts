import {Pizza} from './Pizza';

class NYStylePizzaStore extends Pizza {
    constructor(){
        super();
        this.nombre ='Pizza del Store de estilo N.Y.';
        this.salsa ='Salsa Marina';
        this.masa ='Masa fina y crocante';
        this.ingredientes.push('Queso Reggiano');
    }
    public cortar():void{
        console.log('Cortando pizza estilo N.Y. en cuadrados...');
    }
}

export {NYStylePizzaStore};