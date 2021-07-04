import { Component, Input, OnInit } from '@angular/core';
import { Header } from 'src/app/interfaces/header/header';
import { ComponentsRegistryService } from 'src/app/services/components-registry/components-registry.service';

@Component({
  selector: 'app-header-middle',
  templateUrl: './header-middle.component.html',
  styleUrls: ['./header-middle.component.css']
})
export class HeaderMiddleComponent implements Header {
  @Input() data:any;

  constructor() { }

}

ComponentsRegistryService.registerComponent("HeaderMiddleComponent", HeaderMiddleComponent);