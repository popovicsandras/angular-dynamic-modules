import { Component } from '@angular/core';
import { ANOTHER_EXTENSION } from '../../extension.tokens';

@Component({
  selector: 'app-root',
  template: `<p>app-layout works!</p> <app-in-app-page></app-in-app-page> <ama-extension [token]="token"></ama-extension>`,
  styles: [
    `
      :host {
        background: yellow;
        border: 1px solid #000;
        padding: 10px;
        display: block;
      }
    `
  ]
})
export class AppLayoutComponent {
  token = ANOTHER_EXTENSION;
}
