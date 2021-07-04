import { Component, ComponentFactoryResolver, OnInit, ViewChild } from '@angular/core';
import { MasterDirective } from 'src/app/directives/master.directive';
import { Header } from 'src/app/interfaces/header/header';
import { ComponentsRegistryService } from 'src/app/services/components-registry/components-registry.service';
import { HeaderService } from 'src/app/services/header/header.service';
import { ComponentItem } from 'src/app/utility/component-item';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  components: ComponentItem[] = [];

  @ViewChild(MasterDirective, { static: true }) masterDirective!: MasterDirective;

  constructor(private service: HeaderService,
    private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
    this.components = this.service.getHeader();
    this.loadComponent();
  }

  loadComponent() {
    this.components.forEach( item => {
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(item.component);
      const viewContainerRef = this.masterDirective.viewContainerRef;
      const componentRef = viewContainerRef.createComponent<Header>(componentFactory);
      componentRef.instance.data = item.data;
    });
  }

}
ComponentsRegistryService.registerComponent("HeaderComponent", HeaderComponent);