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
            if(avaliacaoFinal >= 0  && 
               avaliacaoFinal <= 10 && 
               mediaSemestre < 7    && 
               mediaSemestre >= 0 ) return 2; //FINAL
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

        //Calcula o aproveitamento global e a nota da AVF
        aprovGlobal = this.CalcAproveitamentoGlobal();
        avFinal = ( 50 - 6 * aprovGlobal) / 4;
        
        //Captura a parte decimal do numero
        let avfString = avFinal.toString().split('.');
        if(aprovGlobal >= 0 && avFinal <= 10){
            if(avfString[1] && avfString[1][1]){

                //Aproxima quando o numero decimal depois da virgular for quebrado
                if(Number(avfString[1][1]) > 0 ){
                    return  parseFloat(avFinal.toFixed(1)) + 0.1;
                }
            }
            return  parseFloat(avFinal.toFixed(1));
        } 
        return -1;
    }

    public CalcPrevisaoNotas():void{
        //Notas capturadas
        let av1 = this.av1;
        let av2 = this.av2;
        let av3 = this.av3;
        let av4 = this.av4;
        
        //Base de % de cada AV
        let baseAV1_AV2 = 25;
        let baseAv3 = 30;
        let baseAv4 = 20;

        //Ponto minimo para aprovação por unidade [nota * base(%)]
        let pontoMinAV1_AV2 = 175;
        let pontoMinAV3 = 210;
        let pontoMinAV4 = 140;
        
        //Ponto real
        let pontoRealAV1 = 0;
        let pontoRealAV2 = 0;
        let pontoRealAV3 = 0;
        let pontoRealAV4 = 0;

        //Pontuação devendo da unidade
        let sadoParaAV2 = 0;
        let sadoParaAV3 = 0;
        let sadoParaAV4 = 0;

        //Previsão da proxima nota
        let previsaoAV2 = 0;
        let previsaoAV3 = 0;
        let previsaoAV4 = 0;

        if(av1 && !av2 && !av3 && !av4)
        {
            pontoRealAV1 = av1 * baseAV1_AV2;
            console.log("pontoRealAV1: " + pontoRealAV1)
            sadoParaAV2 = (pontoMinAV1_AV2 + 0) - pontoRealAV1;
            console.log("sadoParaAV2: " + sadoParaAV2)
            previsaoAV2 = (pontoMinAV1_AV2 + sadoParaAV2)/baseAV1_AV2;
            console.log("previsaoAV2: " + previsaoAV2)

            //previsaoAV2 = (pontoMinAV1_AV2 + sadoParaAV2)/baseAV1_AV2;
            //previsaoAV2 = (pontoMinAV1_AV2 + sadoParaAV2)/baseAV1_AV2;
            while(previsaoAV2 > 10){

            }
            previsaoAV3 = 7;
            previsaoAV4 = 7;
        }
        console.log("AV1: " + av1);
        console.log("AV2: " + previsaoAV2);
        console.log("AV3: " + previsaoAV3);
        console.log("AV4: " + previsaoAV4);

    }
}