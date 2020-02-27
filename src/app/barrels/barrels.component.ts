import { Component, OnInit } from '@angular/core';
import {Bird,Monkey,Bear} from './interface/index';
@Component({
  selector: 'app-barrels',
  templateUrl: './barrels.component.html'
})
export class BarrelsComponent implements OnInit {

  bird:Bird     = {eyesColor:'violet'};

  bear:Bear     = {claws:10};

  monkey:Monkey = {isFun:true}

  constructor() { }

  ngOnInit() {
  }

}
