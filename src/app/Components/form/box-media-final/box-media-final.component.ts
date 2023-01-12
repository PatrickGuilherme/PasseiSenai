import { Component, Input, OnInit } from '@angular/core';
import { Estudante } from 'src/app/Models/Estudante';

@Component({
  selector: 'app-box-media-final',
  templateUrl: './box-media-final.component.html',
  styleUrls: ['../cards.css','./box-media-final.css']
})
export class BoxMediaFinalComponent implements OnInit {
  @Input() public estudante:Estudante;
  public list_MediaFinal:Array<object>;

  constructor() { 
  }

  ngOnInit(): void {
  }


}
