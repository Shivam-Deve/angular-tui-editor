import { TestBed } from '@angular/core/testing';

import { Tools.ConfigManagerService } from './tools.config-manager.service';

describe('Tools.ConfigManagerService', () => {
  let service: Tools.ConfigManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Tools.ConfigManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
