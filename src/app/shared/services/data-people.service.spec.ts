import { TestBed } from '@angular/core/testing';

import { DataPeopleService } from './data-people.service';

describe('DataPeopleService', () => {
  let service: DataPeopleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataPeopleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  

});
