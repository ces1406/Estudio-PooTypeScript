import {Motocicleta} from './Motocicleta';

class MotoElectrica extends Motocicleta{
    constructor(m:string,c:string,p:number){
        super(m,c,p);
    }
    mostrarCaracteristicas(){
        return 'Moto electrica: \n\tmodelo->'+this.modelo+'\n\tcolor->'+this.color+'\n\tpotencia->'+this.potencia;
    }
}

export {MotoElectrica}