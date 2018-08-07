import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppLayoutComponent } from './components/app-layout/app-layout.component';
import { InAppPageComponent } from './components/in-app-page/in-app-page.component';
import { ConnectorEditorComponent } from './components/connector-editor/connector-editor.component';
import { JsonEditorComponent } from './components/json-editor/json-editor.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [AppLayoutComponent, InAppPageComponent, ConnectorEditorComponent, JsonEditorComponent],
  exports: [AppLayoutComponent]
})
export class AmaLibModule { }
