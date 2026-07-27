import { Component } from '@angular/core';
import { HeaderComponent } from "../../components/header/header.component";
import { FormularioComponent } from "../../components/formulario/formulario.component";
import { MediaSemestre } from '../../components/media-semestre/media-semestre';
import { Aluno } from '../../Model/Aluno';
import { AvaliacaoFinal } from "../../components/avaliacao-final/avaliacao-final";

@Component({
  selector: 'calculadora-page',
  imports: [HeaderComponent, FormularioComponent, MediaSemestre, AvaliacaoFinal],
  templateUrl: './calculadora.page.html',
  styleUrl: './calculadora.page.css',
})
export class CalculadoraPage {
  public Aluno: Aluno | null = null;
  
  public GetAlunoEvento(alunoRecebido: Aluno): void{
    this.Aluno = alunoRecebido;
  }
}
