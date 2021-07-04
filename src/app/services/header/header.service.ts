import { Injectable } from '@angular/core';
import { ComponentItem } from 'src/app/utility/component-item';
import { ComponentsRegistryService } from 'src/app/services/components-registry/components-registry.service';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor() { }

  getHeader() {
    return [
      new ComponentItem(ComponentsRegistryService.getComponent("HeaderBottomComponent"), {content: 'Test content header bottom', tag: 'bottom header'}),
      new ComponentItem(ComponentsRegistryService.getComponent("HeaderMiddleComponent"), {content: 'Test content header middle', tag: 'top middle'}),
      new ComponentItem(ComponentsRegistryService.getComponent("HeaderTopComponent"), {content: 'Test content header top', tag: 'top header'}),
    ];
  }
}
