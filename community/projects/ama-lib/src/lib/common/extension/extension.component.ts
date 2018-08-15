import {
  Component,
  Input,
  ComponentRef,
  OnInit,
  ComponentFactoryResolver,
  ViewChild,
  ViewContainerRef,
  OnDestroy,
  InjectionToken,
  Injector
} from '@angular/core';
import { Type } from '@angular/compiler';

@Component({
  selector: 'ama-extension',
  template: `<div #content></div>`
})
export class ExtensionComponent implements OnInit, OnDestroy {
  @ViewChild('content', { read: ViewContainerRef })
  content: ViewContainerRef;

  @Input()
  token: InjectionToken<string>;

  private componentRef: ComponentRef<any>;

  constructor(private componentFactoryResolver: ComponentFactoryResolver, private injector: Injector) {}

  ngOnInit() {
    const componentClass = this.injector.get<any>(this.token);

    if (componentClass) {
      const factory = this.componentFactoryResolver.resolveComponentFactory(componentClass);
      if (factory) {
        this.content.clear();
        this.componentRef = this.content.createComponent(factory, 0);
      }
    }
  }

  ngOnDestroy() {
    if (this.componentRef) {
      this.componentRef.destroy();
      this.componentRef = null;
    }
  }
}
