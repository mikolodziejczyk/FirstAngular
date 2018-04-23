import { TestBed, inject } from '@angular/core/testing';

import { EMailCheckService } from './e-mail-check.service';

describe('EMailCheckService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [EMailCheckService]
    });
  });

  it('should be created', inject([EMailCheckService], (service: EMailCheckService) => {
    expect(service).toBeTruthy();
  }));
});
