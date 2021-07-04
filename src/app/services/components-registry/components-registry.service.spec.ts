import { TestBed } from '@angular/core/testing';

import { ComponentsRegistryService } from './components-registry.service';

describe('ComponentsRegistryService', () => {
  let service: ComponentsRegistryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComponentsRegistryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
