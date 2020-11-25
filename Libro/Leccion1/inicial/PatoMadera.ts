import Volable from './Volable';
import Quackable from './Quackable';
import Pato from './Pato';

export default class PatoMadera extends Pato implements Volable,Quackable{
    private _tipoMadera:string;
    constructor(){super();}
    public get tipoMadera():string{
        return this._tipoMadera;
    }
    public set tipoMadera(param:string){
        this._tipoMadera = param;
    }
    public volar():string{
        return 'Soy un pato de madera volando...';
    }
    public doQuack():string{
        return 'Soy un pato de mader haciendo quack...';
    }
}