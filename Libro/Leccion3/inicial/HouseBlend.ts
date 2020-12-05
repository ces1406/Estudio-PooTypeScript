import {Bebida} from './Bebida';

class HouseBlend extends Bebida {
    constructor(precio:number,leche:boolean=false,soja:boolean=false,mocha:boolean=false,batido:boolean=false){
        super();
        this.leche = leche;
        this.soja = soja;
        this.mocha = mocha;
        this.batido = batido;
        this.precio = precio;
    }
    public precio:number=0;
    public costo():number{
        var pago:number = super.costo();
        return this.precio+pago;
    }
}

export {HouseBlend};