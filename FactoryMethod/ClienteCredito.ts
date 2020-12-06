import { Cliente } from "./Cliente";
import { Pedido } from "./Pedido";
import { PedidoCredito } from "./PedidoCredito";

class ClienteCredito extends Cliente{
    constructor(){
        super();
    }
    public creaPedido(imp:number):Pedido{
        return new PedidoCredito(imp);
    }
}

export {ClienteCredito}