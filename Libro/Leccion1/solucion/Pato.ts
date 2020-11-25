import ComportamientoDeQuack from './ComportamientoDeQuack';
import ComportamientoDeVuelo from './ComportamientoDeVuelo';

export default abstract class Pato{
    public quack:ComportamientoDeQuack;
    public vuelo:ComportamientoDeVuelo;
    public abstract nadar():string;
    public abstract setVuelo():void;
    public abstract setQuack():void;
}