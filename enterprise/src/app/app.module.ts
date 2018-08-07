import { NgModule } from '@angular/core';
import { BaseAppModule } from '../../../base/src/app/base-app.module';
import { AppComponent } from '../../../base/src/app/app.component';


@NgModule({
  declarations: [AppComponent],
  imports: [ BaseAppModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class ExtendedAppModule {}
