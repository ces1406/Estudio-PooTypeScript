import { Cliente } from "./Cliente";
import { Pedido } from "./Pedido";
import { PedidoContado } from "./PedidoContado";

class ClienteContado extends Cliente{
    constructor(){
        super();
    }
    public creaPedido(imp:number):Pedido{
        return new PedidoContado(imp);
    }
}

export {ClienteContado}