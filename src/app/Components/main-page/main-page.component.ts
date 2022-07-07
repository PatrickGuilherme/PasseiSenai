import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Result } from 'src/app/Models/Result';
import { ApiService } from 'src/app/Service/api.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {
  private Media:Result;
  public gradeForm:FormGroup = this.formbuilder.group({
    av1: [null, [Validators.required, Validators.min(0), Validators.max(10)]],
    av2: [null, [Validators.required, Validators.min(0), Validators.max(10)]],
    av3: [null, [Validators.required, Validators.min(0), Validators.max(10)]],
    edag: [null, [Validators.required, Validators.min(0), Validators.max(10)]]
  });

  ngOnInit(): void {
  }

  constructor(private formbuilder:FormBuilder, 
            private apiservice:ApiService) {
  }

  public VerifyErros(variable:string):string {
    if(!variable) return "";

    if(this.gradeForm.getError('required',variable)) return "Campo obrigatório";
    else 
    if(this.gradeForm.getError('min',variable)) return "Valor minimo de 0";
    else
    if(this.gradeForm.getError('max',variable)) return "Valor maximo de 10";
    else return "";
  }

  public ResultMedia():Result {
    return this.Media;
  }

  public OnSubmit() {
    let av1 = this.gradeForm.value.av1;
    let av2 = this.gradeForm.value.av2;
    let av3 = this.gradeForm.value.av3;
    let edag = this.gradeForm.value.edag;
    let calcResult = ((av1*25)+(av2*25)+(av3*30)+(edag*20))/100
    let colorGrade:string;
    let textMotivation:string;

    if(calcResult < 7){
      colorGrade = "#dc3545";
    } else 
    if(calcResult >= 7 && calcResult <= 7.9){
      colorGrade = "#ffc107";
    }else{
      colorGrade = "#28a745";
    }

    this.apiservice.GetQuote().subscribe(
      Response => {
        textMotivation =  Response.slip.advice;
        console.log(Response.slip.advice)
        this.Media = new Result(calcResult,textMotivation,colorGrade);
      },
      Error => {
        textMotivation = "Sem frases hoje, volte amanhã";
        this.Media = new Result(calcResult,textMotivation,colorGrade);
      }
    );
  }
}
