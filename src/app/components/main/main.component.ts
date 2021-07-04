import { Component, OnInit } from '@angular/core';
import { ComponentsRegistryService } from 'src/app/services/components-registry/components-registry.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
ComponentsRegistryService.registerComponent("MainComponent", MainComponent);