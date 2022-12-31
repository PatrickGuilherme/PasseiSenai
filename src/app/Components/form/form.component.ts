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
      av1: [undefined, [Validators.required, Validators.min(0), Validators.max(10)]],
      av2: [undefined, [Validators.required, Validators.min(0), Validators.max(10)]],
      av3: [undefined, [Validators.required, Validators.min(0), Validators.max(10)]],
      edag: [undefined, [Validators.required, Validators.min(0), Validators.max(10)]]
    });
  }

  public VerifyErros(variable:string):string {
    if(!this.gradeForm.dirty) return "";
    else
    if(this.gradeForm.getError('required',variable)) return "Campo obrigatório";
    else 
    if(this.gradeForm.getError('min',variable)) return "Valor minimo de 0";
    else
    if(this.gradeForm.getError('max',variable)) return "Valor maximo de 10";
    else return "";
  }

}