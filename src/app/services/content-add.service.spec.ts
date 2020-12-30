import { TestBed } from '@angular/core/testing';

import { ContentAddService } from './content-add.service';

describe('ContentAddService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContentAddService = TestBed.get(ContentAddService);
    expect(service).toBeTruthy();
  });
});
