import { Component } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import * as CoreModule from '@angular/core';
// import { AmaLibModule } from 'ama-lib';

declare const SystemJS;

@Component({
  template: `<p>Dinamically loaded and rewired enterprise-connector-editor works!</p> <app-json-editor></app-json-editor>`,
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
  // constructor(private compiler: Compiler, private parentInjector: Injector) {}

  // ngOnInit() {
  //   this.loadSystemJs('./lazy-module/bundles/lazy-module.umd.js').then(module => {
  //     const moduleFactory = this.compiler.compileModuleSync(module.LazyModuleModule);
  //     const moduleRef = moduleFactory.create(this.parentInjector);
  //     const componentClass = module.LazyModuleModule.getEntryComponent();

  //     const resolver = moduleRef.componentFactoryResolver;
  //     const compFactory = resolver.resolveComponentFactory(componentClass);
  //   });
  // }

  // private loadSystemJs(addonPath: string) {
  //   SystemJS.set('@angular/core', SystemJS.newModule(CoreModule));
  //   SystemJS.set('@angular/common', SystemJS.newModule(CommonModule));
  //   SystemJS.set('ama-lib', SystemJS.newModule(AmaLibModule));
  //   return SystemJS.import(addonPath);
  // }
}
