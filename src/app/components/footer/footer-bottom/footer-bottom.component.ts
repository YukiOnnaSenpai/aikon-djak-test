import { Component, Input, OnInit } from '@angular/core';
import { Footer } from 'src/app/interfaces/footer/footer';

@Component({
  selector: 'app-footer-bottom',
  templateUrl: './footer-bottom.component.html',
  styleUrls: ['./footer-bottom.component.css']
})
export class FooterBottomComponent implements Footer {
  @Input() data:any;
  
  constructor() { }

}
