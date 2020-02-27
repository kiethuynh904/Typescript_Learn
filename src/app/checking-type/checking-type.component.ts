import { Component } from '@angular/core';
import { Person } from './person.model';

@Component({
  selector: 'app-checking-type',
  templateUrl: './checking-type.component.html'
})
export class CheckingTypeComponent {
  
  person = new Person('kiet',23);
  strLength:any;

  checkingType(){
    if(this.person instanceof Person){
      return ('Hello from TypeScript');
    }
  }
}
