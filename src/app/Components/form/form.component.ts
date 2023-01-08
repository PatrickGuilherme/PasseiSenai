import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Estudante } from 'src/app/Models/Estudante';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  public estudanteForm:FormGroup;
  public estudante:Estudante;

  constructor(private formbuilder:FormBuilder) { }

  ngOnInit(): void {
    this.estudanteForm = this.formbuilder.group({
      av1: ['', [Validators.required, Validators.pattern('[0-9]+([,\.][0-9]+)?'), Validators.min(0), Validators.max(10), Validators.maxLength(3)]],
      av2: ['', [Validators.required, Validators.pattern('[0-9]+([,\.][0-9]+)?'), Validators.min(0), Validators.max(10), Validators.maxLength(3)]],
      av3: ['', [Validators.required, Validators.pattern('[0-9]+([,\.][0-9]+)?'), Validators.min(0), Validators.max(10), Validators.maxLength(3)]],
      edag:['', [Validators.required, Validators.pattern('[0-9]+([,\.][0-9]+)?'), Validators.min(0), Validators.max(10), Validators.maxLength(3)]]
    });
  }

  //Verifcação de erros 
  public VerifyErros(variable:string):string {
    if(this.estudanteForm.getError('required',variable) && this.estudanteForm.get(variable).touched) return "Campo obrigatório";
    else 
    if(this.estudanteForm.getError('min',variable) && this.estudanteForm.get(variable).touched) return "Valor mínimo de 0";
    else
    if(this.estudanteForm.getError('max',variable) && this.estudanteForm.get(variable).touched) return "Valor máximo de 10";
    else 
    if(this.estudanteForm.getError('pattern',variable) && this.estudanteForm.get(variable).touched) return "Valor inválido";
    return "";
  }

  public SubmitForm():void{
    if(this.estudanteForm.valid){
      this.estudante = new Estudante(
        parseFloat(this.estudanteForm.value.av1),
        parseFloat(this.estudanteForm.value.av2),
        parseFloat(this.estudanteForm.value.av3),
        parseFloat(this.estudanteForm.value.edag)
      );
    }
  }
}