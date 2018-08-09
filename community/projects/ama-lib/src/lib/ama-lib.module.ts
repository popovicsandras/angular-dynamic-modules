import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppLayoutComponent } from './common/app-layout/app-layout.component';
import { InAppPageComponent } from './common/in-app-page/in-app-page.component';
import { ConnectorEditorModule } from './connector-editor/connector-editor.module';

@NgModule({
  imports: [
    BrowserModule,
    ConnectorEditorModule
  ],
  declarations: [
    AppLayoutComponent,
    InAppPageComponent
  ],
  exports: [
    BrowserModule,
    AppLayoutComponent
  ]
})
export class AmaLibModule { }
