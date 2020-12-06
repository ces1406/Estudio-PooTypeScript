import { Automovil } from "./Automovil";
import { Motocicleta } from "./Motocicleta";

interface Fabrica {
    crearAutomovil(modelo:string,color:string,potencia:number,espacio:number):Automovil;
    crearMoto(modelo:string,color:string,potencia:number):Motocicleta;
}

export {Fabrica}