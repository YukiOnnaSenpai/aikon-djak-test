import { Component, Input, OnInit } from '@angular/core';
import { Header } from 'src/app/interfaces/header/header';

@Component({
  selector: 'app-header-middle',
  templateUrl: './header-middle.component.html',
  styleUrls: ['./header-middle.component.css']
})
export class HeaderMiddleComponent implements Header {
  @Input() data:any;

  constructor() { }

}
