import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<p>app-layout works!</p> <app-in-app-page></app-in-app-page>`,
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
export class AppLayoutComponent {}
