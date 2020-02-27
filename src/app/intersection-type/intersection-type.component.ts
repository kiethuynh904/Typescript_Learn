import { Component } from '@angular/core';
import {Bird,Monkey,Bear} from './interface/index';

@Component({
  selector: 'app-intersection-type',
  templateUrl: './intersection-type.component.html'
})
export class IntersectionTypeComponent {

  bird:Bird | Bear;

  bearBirdMonkey:Bird & Bear & Monkey = {
    eyesColor:'violet',
    claws:1,
    isFun:true,
  }
}
