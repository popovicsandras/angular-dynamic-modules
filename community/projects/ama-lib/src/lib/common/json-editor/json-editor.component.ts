import { Component } from '@angular/core';

@Component({
  selector: 'app-json-editor',
  template: `<p>json-editor works!</p>`,
  styles: [
    `
      :host {
        border: 1px solid #000;
        background: teal;
        padding: 10px;
        display: block;
      }
    `
  ]
})
export class JsonEditorComponent {}
