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
    av1: [undefined, [Validators.required, Validators.min(0), Validators.max(10)]],
    av2: [undefined, [Validators.required, Validators.min(0), Validators.max(10)]],
    av3: [undefined, [Validators.required, Validators.min(0), Validators.max(10)]],
    edag: [undefined, [Validators.required, Validators.min(0), Validators.max(10)]]
  });

  ngOnInit(): void {
  }

  constructor(private formbuilder:FormBuilder, 
    private apiservice:ApiService) {
  }

  public GetGrade(gradeTipo:string){
    let valueResturn:number;
    switch(gradeTipo){
      case "av1":
        valueResturn =  this.Arred(this.gradeForm.value.av1);
      break;
      case "av2":
        valueResturn =  this.Arred(this.gradeForm.value.av2);
      break;
      case "av3":
        valueResturn =  this.Arred(this.gradeForm.value.av3);
      break;
      case "edag":
        valueResturn =  this.Arred(this.gradeForm.value.edag);
      break;
    }
    return valueResturn;
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

  public ResultMediaFinal():number{
    return this.Arred((50-6*this.Media.Grade)/4);
  }

  public ResultMedia():Result {
    return this.Media;
  }

  private Arred(media:number):number { 
    var aux = Math.pow(10,1)
    return Math.floor(media * aux)/aux
 }

  public OnSubmit() {
    let colorGrade:string;
    let textMotivation:string;
    let av1:number = this.gradeForm.value.av1;
    let av2:number = this.gradeForm.value.av2;
    let av3:number = this.gradeForm.value.av3;
    let edag:number = this.gradeForm.value.edag;

    let calcResult:number = ((av1*25)+(av2*25)+(av3*30)+(edag*20))/100
    calcResult = this.Arred(calcResult);

    if(calcResult < 7){
      colorGrade = "#dc3545";
    } else{
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
