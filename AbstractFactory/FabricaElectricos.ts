import { AutoElectrico } from "./AutoElectrico";
import { Automovil } from "./Automovil";
import { Fabrica } from "./Fabrica";
import { Motocicleta } from "./Motocicleta";
import { MotoElectrica } from "./MotoElectrica";

class FabricaElectricos implements Fabrica{
    crearAutomovil(modelo:string,color:string,potencia:number,espacio:number):Automovil{
        return new AutoElectrico(modelo,color,potencia,espacio);
    }
    crearMoto(modelo:string,color:string,potencia:number):Motocicleta{
        return new MotoElectrica(modelo,color,potencia);
    }
}

export {FabricaElectricos}