import { Component } from '@angular/core';
import { AmaLibService } from '../../../ama-lib.service';

@Component({
  template: `
    <p>Dinamically loaded community-editor works with service: {{ message }}!</p>
    <app-json-editor></app-json-editor>`,
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
export class CommunityEditorComponent {
  message: string;

  constructor(amaLibService: AmaLibService) {
    this.message = amaLibService.getValue();
  }
}
