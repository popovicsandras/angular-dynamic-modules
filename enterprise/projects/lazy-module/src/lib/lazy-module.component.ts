import { Component, InjectionToken, Inject } from '@angular/core';
import { AmaLibService } from 'ama-lib';
import { Injector } from '@angular/core';

@Component({
  selector: 'lazy-lazy-module',
  template: `
  <p>lazy-module works with service: {{ message }}</p>
  <button mat-raised-button color="primary">Primary</button>`,
  styles: []
})
export class LazyModuleComponent {
  message = '';

  constructor(private injector: Injector) {
    const amaLibService: AmaLibService = injector.get<any>(<any>'goat');
    this.message = amaLibService.getValue();
  }
}
