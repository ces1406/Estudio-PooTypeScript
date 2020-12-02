import Observador from './Observador';
import Observer from './Observer';

export default class DatosClima implements Observador{
    public temperatura:number;
    public presion:number;
    public humedad:number;
    public observers: Observer[];

    constructor(){
        this.observers = [];
    }

    registrarObserver(o:Observer):void{
        this.observers.push(o)
    }
    removerObserver(o:Observer):void{
        delete this.observers[this.observers.indexOf(o)];
    }
    notificarObservers(){
        this.observers.forEach(o=>{
            o.actualizar(this.temperatura,this.humedad,this.presion);
        })
    }
    cambiosDeMedicion():void {
        this.notificarObservers();
    }
}