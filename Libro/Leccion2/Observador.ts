import Observer from './Observer';

export default interface Observador{
    registrarObserver(unObserver:Observer):void;
    removerObserver(unObserver:Observer):void;
    notificarObservers():void;
}