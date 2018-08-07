import { NgModule } from '@angular/core';
import { AmaLibModule } from 'ama-lib';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [
    AmaLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
