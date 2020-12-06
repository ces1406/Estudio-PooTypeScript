import {Pizza} from './Pizza';

abstract class PizzaStore{
    public orderPizza(tipo:string){
        var pizza:Pizza = this.crearPizza(tipo);
        pizza.preparar();
        pizza.hornear();
        pizza.cortar();
        pizza.cajar();
        return pizza;
    }
    abstract crearPizza(tipo:string);
}

export {PizzaStore}