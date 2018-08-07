import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment } from './environments/environment';
import { CommunityModule } from './app/community.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(CommunityModule)
  .catch(err => console.log(err));
