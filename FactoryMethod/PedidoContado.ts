import { Pedido } from "./Pedido";

class PedidoContado extends Pedido{
    constructor(importe:number){
        super(importe);
    }
    paga():void{
        console.log('Se pagaron-> '+this.importe+'$ (al contado)');
    }
    valida():boolean{
        return true;
    }
}

export {PedidoContado}