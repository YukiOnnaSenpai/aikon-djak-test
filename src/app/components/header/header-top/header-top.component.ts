import { Component, Input, OnInit } from '@angular/core';
import { Header } from 'src/app/interfaces/header/header';

@Component({
  selector: 'app-header-top',
  templateUrl: './header-top.component.html',
  styleUrls: ['./header-top.component.css']
})
export class HeaderTopComponent implements Header {
  @Input() data:any;

  constructor() { }

}
