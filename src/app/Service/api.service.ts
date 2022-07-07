import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private baseUrl:string

  //Construtor
  constructor(private http: HttpClient){
      this.baseUrl = "https://api.adviceslip.com/advice";
  } 

  //[GET] Busca uma frase aleatória
  public GetQuote(): Observable<any>{
    return this.http.get<any>(this.baseUrl);
  } 
}