import { Component } from '@angular/core';

@Component({
  template: `<p>Dinamically loaded and rewired enterprise-connector-editor works!</p> <app-json-editor></app-json-editor>`,
  styles: [
    `
      :host {
        background: turquoise;
        border: 1px solid #000;
        padding: 10px;
        display: block;
        color: black;
      }
    `
  ]
})
export class EnterpriseConnectorEditorComponent {}
