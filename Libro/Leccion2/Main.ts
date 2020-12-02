import DatosClima from './DatosClima';
import DisplayCondiciones from './DisplayCondiciones';
import DisplayPronostico from './DisplayPronostico';

let datosClima:DatosClima = new DatosClima();
datosClima.humedad=88;
datosClima.presion=1024;
datosClima.temperatura=26;

var disp1:DisplayCondiciones = new DisplayCondiciones(datosClima);
var disp2:DisplayPronostico = new DisplayPronostico(datosClima);
var disp3:DisplayPronostico = new DisplayPronostico(datosClima);

datosClima.registrarObserver(disp1);
datosClima.registrarObserver(disp2);
datosClima.registrarObserver(disp3);
datosClima.notificarObservers();