import { Injectable } from '@angular/core';
import { FooterBottomComponent } from 'src/app/components/footer/footer-bottom/footer-bottom.component';
import { FooterTopComponent } from 'src/app/components/footer/footer-top/footer-top.component';
import { ComponentItem } from 'src/app/utility/component-item';


@Injectable({
  providedIn: 'root'
})
export class FooterService {

  constructor() { }

  getFooter() {
    return [
      new ComponentItem(FooterBottomComponent, {content: 'Test content footer bottom', tag: 'bottom footer'}),
      new ComponentItem(FooterTopComponent, {content: 'Test content footer top', tag: 'top footer'}),
    ];
  }
}
