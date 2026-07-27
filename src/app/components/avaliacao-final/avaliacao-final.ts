import { Component, Input, SimpleChanges } from '@angular/core';
import { Aluno } from '../../Model/Aluno';
import { AlunoHelper } from '../../Helper/AlunoHelpter';

@Component({
  selector: 'avaliacao-final',
  imports: [],
  templateUrl: './avaliacao-final.html',
  styleUrl: './avaliacao-final.css',
})
export class AvaliacaoFinal {
  @Input() aluno: Aluno | null = null;
  public NotaFinalNecessaria: number;
  public NotaFinalNecessariaApr: number;

  constructor(){
    this.NotaFinalNecessaria = -1;
    this.NotaFinalNecessariaApr = -1;
  }

  public CarregarNotaFinalNecessariaSemAproximacao(): void{
    this.NotaFinalNecessaria = AlunoHelper.ArredondarNotas(this.aluno!.DefinirAVFNecessaria(),3);
  }

  public CarregarNotaFinalNecessariaAproximada(): void{
    this.NotaFinalNecessariaApr = AlunoHelper.ArredondarNotas(this.aluno!.DefinirAVFNecessaria(),1);
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['aluno'] && this.aluno) {
      this.CarregarNotaFinalNecessariaSemAproximacao();
      this.CarregarNotaFinalNecessariaAproximada();
    }
  }
}
