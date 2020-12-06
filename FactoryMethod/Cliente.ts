import { Pedido } from "./Pedido";

abstract class Cliente{
    protected pedidos: Pedido[];

    abstract creaPedido(importe:number):Pedido;
    nuevoPedido(importe:number){
        var ped:Pedido=this.creaPedido(importe);
        if(ped.valida()){
            ped.paga();
            this.pedidos.push(ped);
        }
    }
}

export {Cliente}