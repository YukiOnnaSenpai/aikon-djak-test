import { Injectable } from '@angular/core';
import { ComponentItem } from 'src/app/utility/component-item';
import { ComponentsRegistryService } from '../components-registry/components-registry.service';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor() { }

  getHeader() {
    return [
      new ComponentItem(ComponentsRegistryService.getComponent("HeaderTopComponent"), {content: 'Test content header top', tag: 'top header', portalFlag: 'Djak'}),
      new ComponentItem(ComponentsRegistryService.getComponent("HeaderMiddleComponent"), {content: 'Test content header middle', tag: 'middle header', portalFlag: 'Djak'}),
      new ComponentItem(ComponentsRegistryService.getComponent("HeaderBottomComponent"), {content: 'Test content header bottom', tag: 'bottom header', portalFlag: 'Djak'}),
      new ComponentItem(ComponentsRegistryService.getComponent("HeaderTopComponent"), {content: 'Test content header top', tag: 'top header', portalFlag: 'Spot'}),
      new ComponentItem(ComponentsRegistryService.getComponent("HeaderMiddleComponent"), {content: 'Test content header middle', tag: 'middle header', portalFlag: 'Spot'}),
      new ComponentItem(ComponentsRegistryService.getComponent("HeaderBottomComponent"), {content: 'Test content header bottom', tag: 'bottom header', portalFlag: 'Spot'}),
    ];
  }
}
