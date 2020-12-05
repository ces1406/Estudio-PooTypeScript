import {DecoradorBebida} from './DecoradorBebida';
import {Bebida} from './Bebida';

class Soja extends DecoradorBebida{
    public bebida:Bebida;

    constructor(bebida:Bebida, p:number){
        super();
        this.bebida = bebida;
        this.setPrecio(p);
    }
    getDescripcion():string{
        return this.bebida.getDescripcion()+' con Soja';
    }
    costo(){
        return this.getPrecio()+this.bebida.costo();
    }
}
export {Soja}