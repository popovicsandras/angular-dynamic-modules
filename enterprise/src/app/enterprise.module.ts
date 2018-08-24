import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AmaLibModule, ANOTHER_EXTENSION, AmaLibService } from 'ama-lib';
import { EnterpriseEditorModule } from './enterprise-editor/enterprise-editor.module';
import { AnotherModuleModule } from './another-module/another-module.module';
import { EnterpriseRootComponent } from 'src/app/enterprise-root.component';

declare const SystemJS;
@NgModule({
  declarations: [
    EnterpriseRootComponent
  ],
  imports: [
    BrowserModule,
    AmaLibModule,
    EnterpriseEditorModule,
    AnotherModuleModule
  ],
  providers: [
    { provide: ANOTHER_EXTENSION, useValue: './lazy-module/bundles/lazy-module.umd.js#LazyModuleModule' },
    { provide: 'goat', useExisting: AmaLibService }
  ],
  bootstrap: [EnterpriseRootComponent]
})
export class EnterpriseModule {}
