import Volable from './Volable';
import Quackable from './Quackable';
import Pato from './Pato';

export default class PatoRojo extends Pato implements Volable,Quackable {
    private _tipoRojo:string;
    constructor(){super();}
    public get tipoRojo():string{
        return this._tipoRojo;
    }
    public set tipoRojo(param:string){
        this._tipoRojo = param;
    }
    public volar():string{
        return 'Soy un pato rojo volando...';
    }
    public doQuack():string{
        return 'Soy un pato rojo haciendo quack...';
    }
}