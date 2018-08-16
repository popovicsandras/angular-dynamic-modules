import { Component } from '@angular/core';

@Component({
  template: `<p>Dinamically loaded community-editor works!</p> <app-json-editor></app-json-editor>`,
  styles: [
    `
      :host {
        border: 1px solid #000;
        background: purple;
        padding: 10px;
        display: block;
        color: white;
      }
    `
  ]
})
export class CommunityEditorComponent {}
