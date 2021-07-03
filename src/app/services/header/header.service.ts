import { Injectable } from '@angular/core';
import { HeaderBottomComponent } from 'src/app/components/header/header-bottom/header-bottom.component';
import { HeaderMiddleComponent } from 'src/app/components/header/header-middle/header-middle.component';
import { HeaderTopComponent } from 'src/app/components/header/header-top/header-top.component';
import { ComponentItem } from 'src/app/utility/component-item';

@Injectable({
  providedIn: 'root'
})
export class HeaderService {

  constructor() { }

  getHeader() {
    return [
      new ComponentItem(HeaderBottomComponent, {content: 'Test content header bottom', tag: 'bottom header'}),
      new ComponentItem(HeaderMiddleComponent, {content: 'Test content header middle', tag: 'top middle'}),
      new ComponentItem(HeaderTopComponent, {content: 'Test content header top', tag: 'top header'}),
    ];
  }
}
