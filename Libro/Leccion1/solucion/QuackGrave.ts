import ComportamientoDeQuack from './ComportamientoDeQuack';

export default class QuackGrave implements ComportamientoDeQuack{
    public doQuack():string{
        return 'Haciendo un quack grave...';
    }
}