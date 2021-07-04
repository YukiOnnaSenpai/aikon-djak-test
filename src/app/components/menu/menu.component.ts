import { Component, OnInit } from '@angular/core';
import { ComponentsRegistryService } from 'src/app/services/components-registry/components-registry.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
ComponentsRegistryService.registerComponent("MenuComponent", MenuComponent);