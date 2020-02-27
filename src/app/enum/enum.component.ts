import { Status } from './status.enum';
import { Component } from '@angular/core';

@Component({
  selector: 'app-enum',
  templateUrl: './enum.component.html'
})
export class EnumComponent {
  status:Status = Status.Pending
}
