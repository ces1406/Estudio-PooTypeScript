import {Automovil} from './Automovil';

class AutoElectrico extends Automovil{
    constructor(m:string,c:string,p:number,e:number){
        super(m,c,p,e);
    }
    mostrarCaracteristicas(){
        return 'Auto electrico: \n\tmodelo->'+this.modelo+'\n\tcolor->'+this.color+'\n\tpotencia->'+this.potencia+'\n\tespacio->'+this.espacio;
    }
}

export {AutoElectrico}