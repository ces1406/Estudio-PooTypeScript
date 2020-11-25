import ComportamientoDeVuelo from './ComportamientoDeVuelo';

export default class VueloCorto implements ComportamientoDeVuelo{
    public volar():string{
        return 'Volando distancias cortas...';
    }
}