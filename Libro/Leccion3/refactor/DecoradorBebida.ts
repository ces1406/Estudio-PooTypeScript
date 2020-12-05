import {Bebida} from './Bebida';

abstract class DecoradorBebida extends Bebida{
    public abstract getDescripcion():string;
}

export {DecoradorBebida}