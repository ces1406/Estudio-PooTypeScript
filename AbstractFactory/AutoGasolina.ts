import {Automovil} from './Automovil';

class AutoGasolina extends Automovil{
    constructor(m:string,c:string,p:number,e:number){
        super(m,c,p,e);
    }
    mostrarCaracteristicas(){
        return 'Auto a gasolina: \n\tmodelo->'+this.modelo+'\n\tcolor->'+this.color+'\n\tpotencia->'+this.potencia+'\n\t espacio->'+this.espacio;
    }
}

export {AutoGasolina}