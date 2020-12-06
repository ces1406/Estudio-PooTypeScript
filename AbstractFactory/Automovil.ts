abstract class Automovil{
    protected modelo:string;
    protected color:string;
    protected potencia:number;
    protected espacio:number;

    constructor(m:string,c:string,p:number,e:number){
        this.color = c;
        this.espacio = e;
        this.potencia = p;
        this.modelo = m;
    }

    abstract mostrarCaracteristicas():string;
}

export {Automovil}