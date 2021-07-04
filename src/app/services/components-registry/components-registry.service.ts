import {Type } from '@angular/core';

export class ComponentsRegistryService {
 
  constructor() { }

  private static REGISTRY = new Map<string, Type<any>>();
  
  static getComponent(name: string): Type<any> {
    if(!this.REGISTRY.has(name)){
      throw (`Component with ${name}  not registred!`);
    }
    return this.REGISTRY.get(name);
  }

  static registerComponent(name: string , component : any) {
    if(name !== String(component.name)){
      throw (`Register component failed because given name: ${name} and component ${String(component.name)}!`);
    }
    this.REGISTRY.set(name, component);
  }

}


