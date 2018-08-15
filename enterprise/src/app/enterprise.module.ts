import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AmaLibModule, AppLayoutComponent } from 'ama-lib';
import { EnterpriseEditorModule } from './enterprise-editor/enterprise-editor.module';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    AmaLibModule,
    EnterpriseEditorModule
  ],
  providers: [],
  bootstrap: [AppLayoutComponent]
})
export class EnterpriseModule { }
