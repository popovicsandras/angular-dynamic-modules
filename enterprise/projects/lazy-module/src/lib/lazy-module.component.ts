import { Component, InjectionToken, Inject } from '@angular/core';
import { AmaLibService } from 'ama-lib';

export const AmaLibServiceInLazyModule = new InjectionToken<string>('AmaLibServiceInLazyModule');

@Component({
  selector: 'lazy-lazy-module',
  template: `
  <p>lazy-module works with service: {{ message }}</p>
  <button mat-raised-button color="primary">Primary</button>`,
  styles: []
})
export class LazyModuleComponent {
  message = '';

  constructor(@Inject(AmaLibServiceInLazyModule) amaLibService: AmaLibService) {
    this.message = amaLibService.getValue();
  }
}
