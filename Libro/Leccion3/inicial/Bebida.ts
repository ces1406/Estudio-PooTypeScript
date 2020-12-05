abstract class Bebida {
    public descripcion:string;
    public precioBase:number;
    public leche:boolean;
    public soja:boolean;
    public mocha:boolean;
    public batido:boolean;

    public costo():number{
        var precio:number=0;
        if(this.batido){
            precio += 10;
        };
        if(this.leche){
            precio += 12;
        };
        if(this.mocha){
            precio += 14;
        };
        if(this.soja){
            precio += 11;
        };

        return precio;
    }
}

export {Bebida};