import Observer from './Observer';
import ElementoDisplay from './ElementoDisplay';
import Observador from './Observador';

export default class DisplayPronostico implements Observer,ElementoDisplay{
    public temperatura:number;
    public humedad:number;
    public presion:number;
    public observador:Observador;

    constructor(o:Observador){
        this.observador=o;
    }

    actualizar(t:number,h:number,p:number):void{
        let nro:number=Math.round(Math.random()*10);
        this.temperatura=t+nro;
        this.humedad=h+nro;
        this.presion=p+nro;
        console.log('-> Actualizacion de datos <-');
        this.display();
    };
    display():void{
        console.log('Soy DisplayPronostico con el pronostico:');
        console.log('\t->Temperatura: '+this.temperatura);
        console.log('\t->Presion: '+this.presion);
        console.log('\t->Humedad: '+this.humedad);
    };
}