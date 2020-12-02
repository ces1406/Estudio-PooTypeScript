import Observer from './Observer';
import ElementoDisplay from './ElementoDisplay';
import Observador from './Observador';

export default class DisplayCondiciones implements Observer,ElementoDisplay{
    public temperatura:number;
    public humedad:number;
    public presion:number;
    public observador:Observador;

    constructor(o:Observador){
        this.observador=o;
    }

    actualizar(t:number,h:number,p:number):void{
        this.temperatura=t;
        this.humedad=h;
        this.presion=p;
        console.log('-> Actualizacion de datos <-');
        this.display()
    };
    display():void{
        console.log('Soy DisplayCiondiciones con:');
        console.log('\t->Temperatura: '+this.temperatura);
        console.log('\t->Presion: '+this.presion);
        console.log('\t->Humedad: '+this.humedad);
    };
}