import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnotherComponent } from './components/another/another.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    AnotherComponent
  ],
  exports: [
    AnotherComponent
  ]
})
export class AnotherModuleModule { }
