export class Grade {
    public av1:number
    public av2:number
    public av3:number
    public av4:number

    //Construtor
    constructor(av1:number, av2:number, av3:number, av4:number){
        this.av1 = av1;
        this.av2 = av2;
        this.av3 = av3;
        this.av4 = av4;
    }

    //Arredondar 
    private Arred(media:number):number { 
        var aux = Math.pow(10,1)
        return Math.floor(media * aux)/aux
    }
    
    //Calculo de média do estudante
    public CalcMedia():number{
        if(this.av1 >= 0 && this.av2 >= 0 && this.av3 >= 0 && this.av4 >= 0)
        {
            let result = ((this.av1 * 25) + (this.av2 * 25) + (this.av3 * 30) + (this.av4 * 20)) / 100 
            console.log(result);
            return this.Arred(result);
        }
        return -1;
    }

    //Calcular nota necessária para final
    public ResultMediaFinal(mediaFinal:number):number {
        if(mediaFinal >= 0 && mediaFinal <= 10) return this.Arred(( 50 - 6 * mediaFinal) / 4);
        return -1;
    }
}