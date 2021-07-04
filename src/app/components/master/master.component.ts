import { Component, OnInit } from '@angular/core';
import { ComponentsRegistryService } from 'src/app/services/components-registry/components-registry.service';

@Component({
  selector: 'app-master',
  templateUrl: './master.component.html',
  styleUrls: ['./master.component.css']
})
export class MasterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
ComponentsRegistryService.registerComponent("MasterComponent", MasterComponent);