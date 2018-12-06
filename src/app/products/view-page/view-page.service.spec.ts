import { TestBed } from '@angular/core/testing';

import { ViewPageService } from './view-page.service';

describe('ViewPageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ViewPageService = TestBed.get(ViewPageService);
    expect(service).toBeTruthy();
  });
});
