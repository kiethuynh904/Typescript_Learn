import { Component } from '@angular/core';

@Component({
  selector: 'app-type-array',
  templateUrl: './type-array.component.html'
})
export class TypeArrayComponent {
  example1: string[] = ['Hello World'];

  example2: (number | boolean)[] = [1, 2, true];

  example3: boolean[][] = [ [true, false] ] ;

  exampleTuple:[string,boolean] = ['tuple type',true]
}
