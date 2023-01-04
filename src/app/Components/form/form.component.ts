import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { Grade } from 'src/app/Models/Grade';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  public gradeForm:FormGroup;
  public Grade:Grade;

  constructor(private formbuilder:FormBuilder) { }

  ngOnInit(): void {
    this.gradeForm = this.formbuilder.group({
      av1: ['', [Validators.required, Validators.pattern('[0-9]+([,\.][0-9]+)?'), Validators.min(0), Validators.max(10), Validators.maxLength(3)]],
      av2: ['', [Validators.required, Validators.pattern('[0-9]+([,\.][0-9]+)?'), Validators.min(0), Validators.max(10), Validators.maxLength(3)]],
      av3: ['', [Validators.required, Validators.pattern('[0-9]+([,\.][0-9]+)?'), Validators.min(0), Validators.max(10), Validators.maxLength(3)]],
      edag:['', [Validators.required, Validators.pattern('[0-9]+([,\.][0-9]+)?'), Validators.min(0), Validators.max(10), Validators.maxLength(3)]]
    });
  }

  //Verifcação de erros 
  public VerifyErros(variable:string):string {
    if(this.gradeForm.getError('required',variable) && this.gradeForm.get(variable).touched) return "Campo obrigatório";
    else 
    if(this.gradeForm.getError('min',variable) && this.gradeForm.get(variable).touched) return "Valor mínimo de 0";
    else
    if(this.gradeForm.getError('max',variable) && this.gradeForm.get(variable).touched) return "Valor máximo de 10";
    else 
    if(this.gradeForm.getError('pattern',variable) && this.gradeForm.get(variable).touched) return "Valor inválido";
    return "";
  }

  public SubmitForm():void{
    if(this.gradeForm.valid){
      this.Grade = new Grade(
        parseFloat(this.gradeForm.value.av1),
        parseFloat(this.gradeForm.value.av2),
        parseFloat(this.gradeForm.value.av3),
        parseFloat(this.gradeForm.value.edag)
      );
      console.log(this.Grade.CalcMedia());
      console.log(this.Grade.ResultMediaFinal(this.Grade.CalcMedia()));
    }
  }
}