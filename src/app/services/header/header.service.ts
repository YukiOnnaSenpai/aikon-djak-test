import { Injectable } from '@angular/core';
import { ComponentItem } from 'src/app/utility/component-item';
import { ComponentsRegistryService } from '../components-registry/components-registry.service';
import { InterceptorService } from '../interceptor/interceptor.service';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor() { }

  getHeader() {
    return [
      new ComponentItem(ComponentsRegistryService.getComponent("HeaderTopComponent"), {content: 'Header top', tag: 'top header', portalFlag: InterceptorService.getTenant()}),
      new ComponentItem(ComponentsRegistryService.getComponent("HeaderMiddleComponent"), {content: 'Header middle', tag: 'middle header', portalFlag: InterceptorService.getTenant()}),
      new ComponentItem(ComponentsRegistryService.getComponent("HeaderBottomComponent"), {content: 'Header bottom', tag: 'bottom header', portalFlag: InterceptorService.getTenant()}),
      new ComponentItem(ComponentsRegistryService.getComponent("HeaderTopComponent"), {content: 'Header top', tag: 'top header', portalFlag: InterceptorService.getTenant()}),
      new ComponentItem(ComponentsRegistryService.getComponent("HeaderMiddleComponent"), {content: 'Header middle', tag: 'middle header', portalFlag: InterceptorService.getTenant()}),
      new ComponentItem(ComponentsRegistryService.getComponent("HeaderBottomComponent"), {content: 'Header bottom', tag: 'bottom header', portalFlag: InterceptorService.getTenant()}),
    ];
  }
}
