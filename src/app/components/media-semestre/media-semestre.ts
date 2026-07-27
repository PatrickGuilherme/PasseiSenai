import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Aluno } from '../../Model/Aluno';
import { AlunoHelper } from '../../Helper/AlunoHelpter';

@Component({
  selector: 'media-semestre',
  imports: [],
  templateUrl: './media-semestre.html',
  styleUrl: './media-semestre.css',
})
export class MediaSemestre implements OnChanges {
  @Input() aluno: Aluno | null = null;
  public MediaSemestre: number;
  public MediaSemestreApr: number;
  public Mensagem: string;
  public CorPrincipal: string;
  public CorSecundaria: string;
  public CorTerciaria: string;

  constructor(){
    this.MediaSemestre = -1;
    this.MediaSemestreApr = -1;
    this.Mensagem = "A definir";
    this.CorPrincipal = "";
    this.CorSecundaria = "";
    this.CorTerciaria = "";
  }

  public CarregarMediaSemAproximacao(){
      this.MediaSemestre = AlunoHelper.ArredondarNotas(this.aluno!.CalcularMedia(),3);
  }

  public CarregarMediaAproximada(){
      this.MediaSemestreApr = AlunoHelper.ArredondarNotas(this.aluno!.CalcularMedia(),1);
  }

  public GetCorStatus(){
      let status = this.aluno!.DefinirStatusAprovacao();

    if(status === 1) {
      this.CorPrincipal = "#2EA43D";
      this.CorSecundaria = "#D9EDD1";
      this.CorTerciaria =  "#F8FBF6";
    }

    else if(status === 2) {
      this.CorPrincipal =  "#FEB803";
      this.CorSecundaria = "#FEF1D1";
      this.CorTerciaria = "#FEFBF3";
    }

    else if(status === 3) {
      this.CorPrincipal =  "#E62723";
      this.CorSecundaria = "#FDE0DC";
      this.CorTerciaria =  "#FEF7F7";
    }
  }

  public CarregarMensagemStatus(){
    let statusAluno = this.aluno!.DefinirStatusAprovacao();

    if(statusAluno == 1) 
    {
      this.Mensagem = "Aprovado";
    }  
    else if(statusAluno == 2)
    {
      this.Mensagem = "Você está na FINAL";
    }
    else if(statusAluno == 3)
    { 
      this.Mensagem = "Reprovado"
    }
    else{
      this.Mensagem = "Limbo"
    } 
  }



  ngOnChanges(changes: SimpleChanges): void {
    if(changes['aluno'] && this.aluno){
        this.CarregarMediaSemAproximacao();
        this.CarregarMediaAproximada();
        this.CarregarMensagemStatus();
        this.GetCorStatus()
    }
  }
}
