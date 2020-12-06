import { Pedido } from "./Pedido";

class PedidoCredito extends Pedido{
    constructor(importe:number){
        super(importe);
    }
    paga():void{
        console.log('Se pagaron-> '+this.importe+'$ (a credito)');
    }
    valida():boolean{
        return (this.importe<=500 && this.importe>=1000);
    }
}

export {PedidoCredito}