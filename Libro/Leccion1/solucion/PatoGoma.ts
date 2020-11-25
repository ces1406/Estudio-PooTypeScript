import Pato from './Pato';
import VueloCorto from './VueloCorto';
import QuackAgudo from './QuackAgudo';

export default class PatoGoma extends Pato{
    constructor(){
        super();
    }
    public nadar():string{
        return 'Estoy nadando como un pato rojo...';
    }
    public setVuelo(){
        this.vuelo = new VueloCorto();
    }
    public setQuack(){
        this.quack = new QuackAgudo();
    }
}