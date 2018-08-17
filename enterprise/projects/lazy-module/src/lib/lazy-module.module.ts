import { NgModule } from '@angular/core';
import { LazyModuleComponent } from './lazy-module.component';
import { MatButtonModule } from '@angular/material';

@NgModule({
  imports: [
    MatButtonModule
  ],
  declarations: [LazyModuleComponent],
  exports: [
    LazyModuleComponent
  ],
  entryComponents: [
    LazyModuleComponent
  ]
})
export class LazyModuleModule {
  static getEntryComponent() {
    return LazyModuleComponent;
  }
}
