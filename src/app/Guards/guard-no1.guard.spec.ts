import { TestBed } from '@angular/core/testing';

import { GuardNo1Guard } from './guard-no1.guard';

describe('GuardNo1Guard', () => {
  let guard: GuardNo1Guard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(GuardNo1Guard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
