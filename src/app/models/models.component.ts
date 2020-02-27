import { Person } from './person.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-models',
  templateUrl: './models.component.html'
})
export class ModelsComponent {

  person: Person = new Person (
    {
      firstName: 'Kiet',
      lastName: 'Huynh'
    }
  );

  sayHello(person: Person): string {
    return `${person.firstName} ${person.lastName} say Hello`;
  }

}
