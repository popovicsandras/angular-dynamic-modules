import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AmaLibModule, AppLayoutComponent, ANOTHER_EXTENSION } from 'ama-lib';
import { EnterpriseEditorModule } from './enterprise-editor/enterprise-editor.module';
import { AnotherModuleModule } from './another-module/another-module.module';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    AmaLibModule,
    EnterpriseEditorModule,
    AnotherModuleModule
  ],
  providers: [
    { provide: ANOTHER_EXTENSION, useValue: './lazy-module/bundles/lazy-module.umd.js#LazyModuleModule' }
  ],
  bootstrap: [AppLayoutComponent]
})
export class EnterpriseModule { }
