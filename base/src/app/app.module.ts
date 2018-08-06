import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BaseAppModule } from './base-app.module';


@NgModule({
  declarations: [AppComponent],
  imports: [ BaseAppModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
