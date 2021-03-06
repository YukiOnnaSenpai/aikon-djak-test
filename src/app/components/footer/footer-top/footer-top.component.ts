import { Component, Input } from '@angular/core';
import { Footer } from 'src/app/interfaces/footer/footer';
import { ComponentsRegistryService } from 'src/app/services/components-registry/components-registry.service';

@Component({
  selector: 'app-footer-top',
  templateUrl: './footer-top.component.html',
  styleUrls: ['./footer-top.component.css']
})
export class FooterTopComponent implements Footer {
  @Input() data:any;

  constructor() { }

}

ComponentsRegistryService.registerComponent("FooterTopComponent", FooterTopComponent);