import { IPerson } from './person.interface';
import { Component } from '@angular/core';

@Component({
  selector: 'app-interface',
  templateUrl: './interface.component.html'
})
export class InterfaceComponent {
  personInterface:IPerson = {
    firstName:'kiet',
    lastName:'huynh'
  }
}
