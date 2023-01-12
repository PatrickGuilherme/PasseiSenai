import { Component, Input, OnInit } from '@angular/core';
import { Estudante } from 'src/app/Models/Estudante';

@Component({
  selector: 'app-box-media',
  templateUrl: './box-media.component.html',
  styleUrls: ['../cards.css']
})
export class BoxMediaComponent implements OnInit {
  @Input() public estudante:Estudante;

  constructor() { 
  }

  ngOnInit(): void {
  }

}