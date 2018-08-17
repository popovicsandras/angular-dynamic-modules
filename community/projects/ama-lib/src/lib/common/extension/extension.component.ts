import {
    Component,
    Input,
    ComponentRef,
    OnInit,
    ViewChild,
    ViewContainerRef,
    OnDestroy,
    InjectionToken,
    Injector,
    Type
} from '@angular/core';
import { ExtensionFactoryService } from './extension-factory.service';

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

    constructor(
        private extensionFactoryService: ExtensionFactoryService,
        private injector: Injector) { }

    ngOnInit() {
        const extension = this.injector.get<string | Type<{}>>(this.token);
        if (extension) {
            const factory$ = this.extensionFactoryService.loadFactory(extension, this.injector);

            factory$.subscribe((factory) => {
                this.content.clear();
                this.componentRef = this.content.createComponent(factory, 0);
            });
        }
    }

    ngOnDestroy() {
        if (this.componentRef) {
            this.componentRef.destroy();
            this.componentRef = null;
        }
    }
}
