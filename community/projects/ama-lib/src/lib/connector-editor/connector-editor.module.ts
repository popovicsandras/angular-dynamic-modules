import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConnectorEditorComponent } from './components/connector-editor/connector-editor.component';
import { JsonEditorComponent } from '../common/json-editor/json-editor.component';
import { CONNECTOR_EDITOR_UI, ANOTHER_EXTENSION } from '../extension.tokens';
import { CommunityEditorComponent } from './components/community-editor/community-editor.component';
import { ExtensionComponent } from '../common/extension/extension.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    ConnectorEditorComponent,
    CommunityEditorComponent,
    ExtensionComponent,
    JsonEditorComponent
  ],
  exports: [
    ConnectorEditorComponent,
    JsonEditorComponent,
    ExtensionComponent
  ],
  providers: [
    { provide: CONNECTOR_EDITOR_UI, useValue: CommunityEditorComponent },
    { provide: ANOTHER_EXTENSION, useValue: null }
  ],
  entryComponents: [
    CommunityEditorComponent
  ]
})
export class ConnectorEditorModule { }
