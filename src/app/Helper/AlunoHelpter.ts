export class AlunoHelper{
    
    public static GetNumeroValido(numero: number | null | undefined): number{
        if(!numero && numero !== 0) return -1;
        return numero;
    }

    public static ArredondarNotas(valor: number, qtdCasasDecimais: number): number {
        console.log(valor)
        if(valor < 0) return -1;
        let fator: number = 10**qtdCasasDecimais
        return Math.round(valor * fator ) / fator;
    }
}