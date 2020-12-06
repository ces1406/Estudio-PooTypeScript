abstract class Motocicleta{
    protected modelo:string;
    protected color:string;
    protected potencia:number;

    constructor(m:string,c:string,p:number){
        this.color = c;
        this.potencia = p;
        this.modelo = m;
    }

    abstract mostrarCaracteristicas():string;
}

export {Motocicleta}