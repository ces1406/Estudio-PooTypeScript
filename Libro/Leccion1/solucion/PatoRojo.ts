import ComportamientoDeVuelo from './ComportamientoDeVuelo';
import Pato from './Pato';
import VueloBajo from './VueloBajo';
import QuackGrave from './QuackGrave';

export default class PatoRojo extends Pato{
    constructor(){
        super();
    }
    public nadar():string{
        return 'Estoy nadando como un pato rojo...';
    }
    public setVuelo(){
        this.vuelo = new VueloBajo();
    }
    public setQuack(){
        this.quack = new QuackGrave();
    }
}