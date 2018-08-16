import { Component } from '@angular/core';

@Component({
  selector: 'app-in-app-page',
  template: `<p>in-app-page works!</p> <app-connector-editor></app-connector-editor>`,
  styles: [
    `
      :host {
        border: 1px solid #000;
        background: red;
        color: white;
        padding: 10px;
        display: block;
      }
    `
  ]
})
export class InAppPageComponent {}
