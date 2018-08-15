import { Component } from '@angular/core';
import { CONNECTOR_EDITOR_UI } from '../../../extension.tokens';

@Component({
  selector: 'app-connector-editor',
  templateUrl: './connector-editor.component.html',
  styleUrls: ['./connector-editor.component.css']
})
export class ConnectorEditorComponent {
  token = CONNECTOR_EDITOR_UI;
}
