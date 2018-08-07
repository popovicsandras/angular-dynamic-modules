import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from './environments/environment';
import { EnterpriseModule } from './app/enterprise.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(EnterpriseModule)
  .catch(err => console.log(err));
