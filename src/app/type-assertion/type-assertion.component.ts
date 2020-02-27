import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-type-assertion',
  templateUrl: './type-assertion.component.html'
})
export class TypeAssertionComponent implements OnInit {
  strLength:any
  constructor() { }

  ngOnInit() {
    this.typeAssertion();
  }

  typeAssertion():any{
    let definetlyNotAString: any = 'I am a string';
    this.strLength = (<string> definetlyNotAString).length;
  }

}
