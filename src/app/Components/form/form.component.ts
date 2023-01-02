import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  public gradeForm:FormGroup;
  constructor(private formbuilder:FormBuilder) { }

  ngOnInit(): void {
    this.gradeForm = this.formbuilder.group({
      av1: ['', [Validators.required, Validators.min(0), Validators.max(10), Validators.maxLength(3)]],
      av2: ['', [Validators.required, Validators.min(0), Validators.max(10), Validators.maxLength(3)]],
      av3: ['', [Validators.required, Validators.min(0), Validators.max(10), Validators.maxLength(3)]],
      edag:['', [Validators.required, Validators.min(0), Validators.max(10), Validators.maxLength(3)]]
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
    if(typeof(parseFloat(this.gradeForm.get(variable).value)) != 'number' && this.gradeForm.get(variable).touched) return "Valor Inválido 2";
    else
    return "";
  }
}