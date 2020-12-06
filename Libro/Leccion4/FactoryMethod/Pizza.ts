abstract class Pizza{
    nombre:string;
    masa:string;
    salsa:string;
    ingredientes:string[];

    public preparar():void{
        console.log('Preparando la pizza->'+this.nombre);
    }
    public hornear():void{
        console.log('Horneando la pizza...');
    }
    public cortar():void{
        console.log('Cortando la pizza...');
    }
    public cajar():void{
        console.log('Poniendo la pizza en caja...');
    }
}

export {Pizza}