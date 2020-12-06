import { AutoGasolina } from "./AutoGasolina";
import { Automovil } from "./Automovil";
import { Fabrica } from "./Fabrica";
import { Motocicleta } from "./Motocicleta";
import { MotoGasolina } from "./MotoGasolina";

class FabricaGasolinos implements Fabrica{
    crearAutomovil(modelo:string,color:string,potencia:number,espacio:number):Automovil{
        return new AutoGasolina(modelo,color,potencia,espacio);
    }
    crearMoto(modelo:string,color:string,potencia:number):Motocicleta{
        return new MotoGasolina(modelo,color,potencia);
    }
}

export {FabricaGasolinos}