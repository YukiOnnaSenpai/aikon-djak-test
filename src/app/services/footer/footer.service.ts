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
      new ComponentItem(ComponentsRegistryService.getComponent("HeaderBottomComponent"), {content: 'Test content footer bottom', tag: 'bottom footer'}),
      new ComponentItem(ComponentsRegistryService.getComponent("FooterBottomComponent"), {content: 'Test content footer top', tag: 'top footer'}),
    ];
  }
}
