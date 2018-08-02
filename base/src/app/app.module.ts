import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { BaseModule1Module } from './base-module-1/base-module-1.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BaseModule1Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
