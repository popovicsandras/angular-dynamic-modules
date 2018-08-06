import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Base1Module } from './base-1/base-1.module';


@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    Base1Module
  ],
  exports: [
    BrowserModule,
    Base1Module
  ],
  providers: []
})
export class BaseAppModule { }
