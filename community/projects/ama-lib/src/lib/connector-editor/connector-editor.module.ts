import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConnectorEditorComponent } from './components/connector-editor/connector-editor.component';
import { JsonEditorComponent } from '../common/json-editor/json-editor.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ConnectorEditorComponent,
    JsonEditorComponent
  ],
  exports: [
    ConnectorEditorComponent,
    JsonEditorComponent
  ]
})
export class ConnectorEditorModule { }
