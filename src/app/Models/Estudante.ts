export class Estudante {
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

    //Definir Cor do aproveitamento global
    public GetCorAG():string{
        let result = this.StatusEstudante();

        if(result == 1) return "#28a745"; //APROVADO (Verde)
        else if(result == 2) return "#ffc107";//FINAL (Amarelo)
        return "#dc3545";//REPROVADO (Vermelho)
    }

    //Status student
    public StatusEstudante():number{
        let mediaSemestre = this.CalcAproveitamentoGlobal();
        let avaliacaoFinal = this.CalcAvalicaoFinal();

        if( mediaSemestre >= 7){
            return 1;//APROVADO DIRETO
        }else{
            if(avaliacaoFinal <= 10 && mediaSemestre < 7  ) return 2; //FINAL
            return 0;//REPROVADO
        }
    }

    //Calculo de média do estudante
    public CalcAproveitamentoGlobal():number{
        if(this.av1 >= 0 && this.av2 >= 0 && this.av3 >= 0 && this.av4 >= 0)
        {
            let resultado = ((this.av1 * 25) + (this.av2 * 25) + (this.av3 * 30) + (this.av4 * 20)) / 100 
            return this.ArredondarAprovGlobal(resultado);
        }
        return -1;
    }

    //Arredondar aproveitamento global
    private ArredondarAprovGlobal(valor:number):number{
        let aux = Math.pow(10,1)
        let resultado = Math.floor(valor*aux)/aux;
        return resultado;
    }

    //Calcular nota necessária para final
    public CalcAvalicaoFinal(mediaParam?:number):number {
        let aprovGlobal:number;
        let avFinal:number;

        aprovGlobal = this.CalcAproveitamentoGlobal();
        avFinal = ( 50 - 6 * aprovGlobal) / 4;
        console.log(avFinal);
        if(aprovGlobal >= 0 && avFinal <= 10) return  Math.round(parseFloat(avFinal.toFixed(1)));
        return -1;
    }
}
