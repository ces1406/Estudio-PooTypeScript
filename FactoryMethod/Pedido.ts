abstract class Pedido{
    protected importe:number;

    constructor(i:number){
        this.importe = i;
    }
    abstract valida():boolean;
    abstract paga():void;
}

export {Pedido}