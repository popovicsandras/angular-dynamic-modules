import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StaticComponent } from './components/static/static.component';
import { StaticInnerComponent } from './components/static-inner/static-inner.component';
import { StaticInnerInnerComponent } from './components/static-inner-inner/static-inner-inner.component';
import { ExtensionComponent } from '../common/extension/extension.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    StaticComponent,
    StaticInnerComponent,
    StaticInnerInnerComponent,
    ExtensionComponent
  ],
  exports: [StaticComponent]
})
export class Base1Module { }
