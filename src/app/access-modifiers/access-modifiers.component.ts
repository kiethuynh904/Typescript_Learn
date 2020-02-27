import { Component, OnInit } from '@angular/core';
import { Bear } from './bear.model';

@Component({
  selector: 'app-access-modifiers',
  templateUrl: './access-modifiers.component.html'
})
export class AccessModifiersComponent implements OnInit {

  ngOnInit() {
    const bear = new Bear({name: 'Omega', tail: true});
    bear.claws = 3;
    bear.setTail(false);
    console.log(bear.getTail());
    console.log(bear.add(1, 2));
  }

}
