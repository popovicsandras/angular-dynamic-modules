import { Component, Inject } from '@angular/core';
import { AmaLibService } from 'ama-lib';
import { AmaLibServiceInLazyModule } from 'lazy-module';

@Component({
  template: `
  <p>Dinamically loaded and rewired enterprise-connector-editor works with service: {{ message }}!</p>
  <app-json-editor></app-json-editor>`,
  styles: [
    `
      :host {
        background: turquoise;
        border: 1px solid #000;
        padding: 10px;
        display: block;
        color: black;
      }
    `
  ]
})
export class EnterpriseConnectorEditorComponent {
  message: string;

  constructor(amaLibService: AmaLibService, @Inject(AmaLibServiceInLazyModule) karaj: any) {
    this.message = amaLibService.getValue();
    /*tslint:disable-next-line*/
    console.log('karaj: ', karaj);
  }
}
