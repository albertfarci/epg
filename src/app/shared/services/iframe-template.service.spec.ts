import { TestBed } from '@angular/core/testing';

import { IframeTemplateService } from './iframe-template.service';

describe('IframeTemplateService', () => {
  let service: IframeTemplateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IframeTemplateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
