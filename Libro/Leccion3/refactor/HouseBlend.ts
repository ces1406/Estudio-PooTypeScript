import {Bebida} from './Bebida';

class HouseBlend extends Bebida{
    constructor(d:string, p:number){
        super();
        this.setDescripcion(d);
        this.setPrecio(p);
    }    
    public costo():number{
        return this.getPrecio();
    }
}

export {HouseBlend};