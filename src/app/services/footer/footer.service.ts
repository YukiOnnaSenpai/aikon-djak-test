import { Injectable } from '@angular/core';
import { ComponentItem } from 'src/app/utility/component-item';
import { ComponentsRegistryService } from '../components-registry/components-registry.service';


@Injectable({
  providedIn: 'root'
})
export class FooterService {

  constructor() { }

  getFooter() {
    return [
      new ComponentItem(ComponentsRegistryService.getComponent("FooterBottomComponent"), {content: 'Test content footer bottom', tag: 'bottom footer', portalFlag: 'Djak'}),
      new ComponentItem(ComponentsRegistryService.getComponent("FooterTopComponent"), {content: 'Test content footer top', tag: 'top footer', portalFlag: 'Djak'}),
      new ComponentItem(ComponentsRegistryService.getComponent("FooterBottomComponent"), {content: 'Test content footer bottom', tag: 'bottom footer', portalFlag: 'Spot'}),
      new ComponentItem(ComponentsRegistryService.getComponent("FooterTopComponent"), {content: 'Test content footer top', tag: 'top footer', portalFlag: 'Spot'}),
    ];
  }
}
