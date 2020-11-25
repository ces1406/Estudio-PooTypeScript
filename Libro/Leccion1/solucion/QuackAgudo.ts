import ComportamientoDeQuack from './ComportamientoDeQuack';

export default class QuackAgudo implements ComportamientoDeQuack{
    public doQuack():string{
        return 'Haciendo un quack agudo...';
    }
}