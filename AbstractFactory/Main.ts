import { Fabrica } from "./Fabrica";
import { FabricaElectricos } from "./FabricaElectricos";

var fabrica:Fabrica;

// acá está la ventaja puedo declarar fabrica como FabricaElectricos o FabricaGasolinos:
fabrica = new FabricaElectricos();

var auto1 = fabrica.crearAutomovil('modelo AA1','negro',2500,4);
var moto1 = fabrica.crearMoto('modelo AFF1','rosa',750);

console.log(auto1.mostrarCaracteristicas());
console.log(moto1.mostrarCaracteristicas());