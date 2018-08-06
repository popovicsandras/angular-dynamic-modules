import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { Base1Module } from './base-1/base-1.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    Base1Module
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
