import { Component, DestroyRef, EventEmitter, inject, OnInit, Output } from '@angular/core';
import { ItemFormularioComponent } from "../item-formulario/item-formulario.component";
import { FormBuilder, FormControl, ReactiveFormsModule, Validators } from '@angular/forms';
import { Aluno } from '../../Model/Aluno';
import { AlunoHelper } from '../../Helper/AlunoHelpter';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'formulario-component',
  imports: [ItemFormularioComponent, ReactiveFormsModule],
  templateUrl: './formulario.component.html',
  styleUrl: './formulario.component.css',
})
export class FormularioComponent implements OnInit {
  @Output() AlunoEvento = new EventEmitter<Aluno>();
  public Aluno:Aluno;
  public Npa:string;
  
  private readonly destroyRef = inject(DestroyRef);
  private readonly formBuilder = inject(FormBuilder);

  public readonly formulario  = this.formBuilder.group({
    av1: this.CriarControleNota(),
    av2: this.CriarControleNota(),
    av3: this.CriarControleNota(),
    edag: this.CriarControleNota()
  });

  constructor(){
    this.Aluno = this.ExtrairEntrada(); 
    this.Npa = "7";
  }

  ngOnInit(): void {
    this.formulario.valueChanges
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(notas => {
        this.GetNPA();
        
      });  
  }

  //Criação de itens do formulário
  CriarControleNota(): FormControl<number | null> {
    return this.formBuilder.control<number | null>(null, {
      validators: [
        Validators.required,
        Validators.min(0),
        Validators.max(10)
      ]
    });
  }

  //Extrair dados dos inputs 
  public ExtrairEntrada(): Aluno{
    
    let notaAV1: number = this.formulario.getRawValue().av1!;
    let notaAV2: number = this.formulario.getRawValue().av2!;
    let notaAV3: number = this.formulario.getRawValue().av3!;
    let notaEdag: number = this.formulario.getRawValue().edag!;
    
    let aluno: Aluno = new Aluno(
      notaAV1,
      notaAV2,
      notaAV3,
      notaEdag
    );
    return aluno;
  }

  //Consultar nota para aprovação
  public GetNPA() {
    this.Aluno = this.ExtrairEntrada(); 
    let valor = this.Aluno.DefinirNPA();

    if(valor >= 10 || valor < 0)  this.Npa = ""
    else if(valor) this.Npa = "" + valor?.toString();
    else this.Npa = "";
  }

  //Verificar se o formulario está valido
  public FormularioValido():boolean{
    return (this.formulario.touched || this.formulario.dirty) && !this.formulario.invalid
  }

  //Calcular notas
  public Calcular(): void{

    if(this.FormularioValido()){
      this.Aluno = this.ExtrairEntrada();
      this.AlunoEvento.emit(this.Aluno);
    }
  }
}