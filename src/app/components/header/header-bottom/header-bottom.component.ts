import { Component, Input, OnInit } from '@angular/core';
import { Header } from 'src/app/interfaces/header/header';

@Component({
  selector: 'app-header-bottom',
  templateUrl: './header-bottom.component.html',
  styleUrls: ['./header-bottom.component.css']
})
export class HeaderBottomComponent implements Header {
  @Input() data:any;

  constructor() { }

}
