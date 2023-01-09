import { Component, Input, OnInit } from '@angular/core';
import { Estudante } from 'src/app/Models/Estudante';

@Component({
  selector: 'app-box-previsao',
  templateUrl: './box-previsao.component.html',
  styleUrls: ['../cards.css','./box-previsao.component.css']
})
export class BoxPrevisaoComponent implements OnInit {
  @Input() estudante:Estudante;

  constructor() { }

  ngOnInit(): void { }
}