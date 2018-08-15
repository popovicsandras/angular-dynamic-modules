import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EnterpriseConnectorEditorComponent } from './components/enterprise-connector-editor/enterprise-connector-editor.component';
import { CONNECTOR_EDITOR_UI, ConnectorEditorModule } from 'ama-lib';

@NgModule({
  imports: [
    CommonModule,
    ConnectorEditorModule
  ],
  declarations: [
    EnterpriseConnectorEditorComponent
  ],
  providers: [
    { provide: CONNECTOR_EDITOR_UI, useValue: EnterpriseConnectorEditorComponent }
  ],
  entryComponents: [
    EnterpriseConnectorEditorComponent
  ]
})
export class EnterpriseEditorModule { }
