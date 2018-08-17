import { Component } from '@angular/core';
import { ANOTHER_EXTENSION } from 'ama-lib';

@Component({
  selector: 'app-another',
  templateUrl: './another.component.html',
  styleUrls: ['./another.component.css']
})
export class AnotherComponent {
  token = ANOTHER_EXTENSION;
}
