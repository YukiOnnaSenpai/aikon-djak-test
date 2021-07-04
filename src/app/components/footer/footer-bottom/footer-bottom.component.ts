import { Component, Input, OnInit } from '@angular/core';
import { Footer } from 'src/app/interfaces/footer/footer';
import { ComponentsRegistryService } from 'src/app/services/components-registry/components-registry.service';

@Component({
  selector: 'app-footer-bottom',
  templateUrl: './footer-bottom.component.html',
  styleUrls: ['./footer-bottom.component.css']
})
export class FooterBottomComponent implements Footer {
  @Input() data:any;
  
  constructor() { }

}

ComponentsRegistryService.registerComponent("FooterBottomComponent", FooterBottomComponent);