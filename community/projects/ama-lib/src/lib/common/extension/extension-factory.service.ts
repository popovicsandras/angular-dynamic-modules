import {
    Injectable,
    ComponentFactory,
    ComponentFactoryResolver,
    Injector,
    Compiler,
    Type
} from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { defer, of } from 'rxjs';

import { CommonModule } from '@angular/common';
import * as CoreModule from '@angular/core';
import * as MaterialModule from '@angular/material';
import * as CdkModule from '@angular/cdk';
declare const SystemJS;

@Injectable()
export class ExtensionFactoryService {
    constructor(private compiler: Compiler, private componentFactoryResolver: ComponentFactoryResolver) { }

    loadFactory(extension: string | Type<{}>, parentInjector: Injector): Observable<ComponentFactory<{}>> {
        if (typeof extension === 'string') {
            return this.loadBundledModule(extension, parentInjector);
        } else {
            return of(this.componentFactoryResolver.resolveComponentFactory(extension));
        }
    }

    loadBundledModule(extension: string, parentInjector: Injector): Observable<ComponentFactory<{}>> {
        return defer(() => {
            const extensionParts = extension.split('#'),
                path = extensionParts[0],
                moduleName = extensionParts[1];

            return this.loadSystemJs(path).then(module => {
                const angularModule = module[moduleName],
                    moduleFactory = this.compiler.compileModuleSync(angularModule),
                    moduleRef = moduleFactory.create(parentInjector),
                    componentClass = angularModule.getEntryComponent();

                /*tslint:disable-next-line*/
                console.log(moduleRef);

                const resolver = moduleRef.componentFactoryResolver;
                return resolver.resolveComponentFactory(componentClass);
            });
        });
    }

    private loadSystemJs(addonPath: string) {
        SystemJS.set('@angular/core', SystemJS.newModule(CoreModule));
        SystemJS.set('@angular/common', SystemJS.newModule(CommonModule));
        SystemJS.set('@angular/material', SystemJS.newModule(MaterialModule));
        SystemJS.set('@angular/cdk', SystemJS.newModule(CdkModule));
        return SystemJS.import(addonPath);
    }
}
