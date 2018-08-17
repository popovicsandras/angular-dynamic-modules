import { Component } from '@angular/core';
import { CONNECTOR_EDITOR_UI } from '../../../extension.tokens';
import { AmaLibService } from '../../../ama-lib.service';

@Component({
  selector: 'app-connector-editor',
  template: `
  <p>connector-editor works with service: {{ message }}!</p>
  <ama-extension [token]="token"></ama-extension>`,
  styles: [
    `
      :host {
        border: 1px solid #000;
        background: green;
        padding: 10px;
        display: block;
        color: white;
      }
    `
  ]
})
export class ConnectorEditorComponent {
  token = CONNECTOR_EDITOR_UI;
  message: string;

  constructor(amaLibService: AmaLibService) {
    this.message = amaLibService.getValue();
  }
}
