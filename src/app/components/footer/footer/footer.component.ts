import { Component, ComponentFactoryResolver, OnInit, ViewChild } from '@angular/core';
import { MasterDirective } from 'src/app/directives/master.directive';
import { Footer } from 'src/app/interfaces/footer/footer';
import { ComponentsRegistryService } from 'src/app/services/components-registry/components-registry.service';
import { FooterService } from 'src/app/services/footer/footer.service';
import { ComponentItem } from 'src/app/utility/component-item';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  components: ComponentItem[] = [];

  @ViewChild(MasterDirective, { static: true }) masterDirective!: MasterDirective;

  constructor(private service: FooterService,
    private componentFactoryResolver: ComponentFactoryResolver) { }

  ngOnInit(): void {
    this.components = this.service.getFooter();
    this.loadComponent();
  }

  loadComponent() {
    this.components.forEach( item => {
      const componentFactory = this.componentFactoryResolver.resolveComponentFactory(item.component);
      const viewContainerRef = this.masterDirective.viewContainerRef;
      const componentRef = viewContainerRef.createComponent<Footer>(componentFactory);
      componentRef.instance.data = item.data;
    });
  }

}

ComponentsRegistryService.registerComponent("FooterComponent",FooterComponent);