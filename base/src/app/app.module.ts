import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BaseAppModule } from './base-app.module';
import { AmaLibModule } from 'ama-lib';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BaseAppModule,
    AmaLibModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
