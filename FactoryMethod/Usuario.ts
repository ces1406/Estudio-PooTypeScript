import { Cliente } from "./Cliente";
import { ClienteContado } from "./ClienteContado";

var cliente1:Cliente;
cliente1 = new ClienteContado();
cliente1.nuevoPedido(500);
cliente1.nuevoPedido(300);