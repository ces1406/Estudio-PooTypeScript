class Singleton{
    private atributo1:string ;
    private static singleton: Singleton = null;
    constructor(param1:string){
        this.atributo1 = param1;
    }
    public static getSingleton():Singleton{
        if(this.singleton === null){
            this.singleton = new Singleton('atributo por default');
        }
        return this.singleton;
    }
    public setAtrib1(param1:string):void{
        this.atributo1 = param1;
    }
    public getAtrib1():string{
        return this.atributo1;
    }
}

var objSignleton1:Singleton = Singleton.getSingleton();
console.log('objSingleton1.getAtrib1(): ',objSignleton1.getAtrib1());
objSignleton1.setAtrib1('palabra1');
console.log('objSingleton1.getAtrib1(): ',objSignleton1.getAtrib1());
var objSignleton2:Singleton = Singleton.getSingleton();
console.log('objSingleton2.getAtrib1(): ',objSignleton2.getAtrib1());