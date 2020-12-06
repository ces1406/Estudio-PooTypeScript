import {Motocicleta} from './Motocicleta';

class MotoGasolina extends Motocicleta{
    constructor(m:string,c:string,p:number){
        super(m,c,p);
    }
    mostrarCaracteristicas(){
        return 'Moto gasolina: \n\tmodelo->'+this.modelo+'\n\tcolor->'+this.color+'\n\tpotencia->'+this.potencia;
    }
}

export {MotoGasolina}