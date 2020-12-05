abstract class Bebida{
    private descripcion:string;
    private precio:number;

    public abstract costo():number;
    public getDescripcion():string{
        return this.descripcion;
    };
    public setDescripcion(d:string):void{
        this.descripcion = d;
    }
    public getPrecio():number{
        return this.precio;
    }
    public setPrecio (p:number):void{
        this.precio = p;
    }
}

export {Bebida}