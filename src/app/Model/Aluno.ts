import { AlunoHelper } from "../Helper/AlunoHelpter";

export class Aluno {
    public NotaAV1: number;
    public NotaAV2: number;
    public NotaAV3: number;
    public NotaEdag: number;

    constructor(
        NotaAV1: number | null,
        NotaAV2: number | null,
        NotaAV3: number | null,
        NotaEdag: number | null
    ){
        this.NotaAV1 =  AlunoHelper.ArredondarNotas(AlunoHelper.GetNumeroValido(NotaAV1),1);
        this.NotaAV2 =  AlunoHelper.ArredondarNotas(AlunoHelper.GetNumeroValido(NotaAV2),1);
        this.NotaAV3 =  AlunoHelper.ArredondarNotas(AlunoHelper.GetNumeroValido(NotaAV3),1);
        this.NotaEdag =  AlunoHelper.ArredondarNotas(AlunoHelper.GetNumeroValido(NotaEdag),1);
    }

    //Calcular média
    public CalcularMedia(): number{
        if(this.NotaAV1 >= 0 && this.NotaAV2 >= 0 && this.NotaAV3 >= 0 && this.NotaEdag >= 0)
            return  ((this.NotaAV1)*(25/100) + (this.NotaAV2)*(25/100) + (this.NotaAV3)*(30/100) + (this.NotaEdag)*(20/100));
        return -1;
    }

    //Status aprovação
    public DefinirStatusAprovacao():number {
        let media = AlunoHelper.ArredondarNotas(this.CalcularMedia(),1);

        //(-1) Erro
        if(media < 0) return -1;

        //(1) Aprovado
        if(media >= 7) return 1;

        //(2) Em recuperacao
        if(this.DefinirAVFNecessaria() <= 10  && media < 7) return 2;

        //(3) Reprovado
        if(this.DefinirAVFNecessaria() > 10  && media < 7) return 3;

        //(-1) Erro
        return -1;
    }

    //Nota necessária pra aprovação na final
    public DefinirAVFNecessaria():number{
        let media:number = AlunoHelper.ArredondarNotas(this.CalcularMedia(),1);
        return (5 - media*0.6)/0.4;
    }

    //Nota necessária para aprovação direta
    public DefinirNPA() {
        if((this.NotaAV1 <= -1) && (this.NotaAV2 <= -1) && (this.NotaAV3 <= -1) && (this.NotaEdag <= -1)) return 7;
        
        let numerador: number = 7 - (this.NotaAV1 !== -1 ? this.NotaAV1*0.25 : 0) 
                                     - (this.NotaAV2 !== -1 ? this.NotaAV2*0.25 : 0) 
                                     - (this.NotaAV3 !== -1 ? this.NotaAV3*0.30 : 0) 
                                     - (this.NotaEdag !== -1 ? this.NotaEdag *0.20 : 0);

        let denominador: number = (this.NotaAV1 === -1 ? 0.25 : 0) + 
                                  (this.NotaAV2 === -1 ? 0.25 : 0) +
                                  (this.NotaAV3 === -1 ? 0.30 : 0) +
                                  (this.NotaEdag === -1 ? 0.20 : 0);
        
        if(denominador === 0) return -1;
        let resultado = numerador / denominador;
        return  AlunoHelper.ArredondarNotas(resultado,1);
    }

}