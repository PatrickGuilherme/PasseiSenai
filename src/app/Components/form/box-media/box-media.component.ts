import { Component, Input, OnInit } from '@angular/core';
import { Grade } from 'src/app/Models/Grade';

@Component({
  selector: 'app-box-media',
  templateUrl: './box-media.component.html',
  styleUrls: ['./box-media.component.css']
})
export class BoxMediaComponent implements OnInit {
  @Input() public grade:Grade;

  constructor() { 
    console.log(this.grade)
  }

  ngOnInit(): void {
    console.log(this.grade)
  }

}