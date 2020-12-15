import { TestBed } from '@angular/core/testing';

import { MyActivateChildGuardGuard } from './my-activate-child-guard.guard';

describe('MyActivateChildGuardGuard', () => {
  let guard: MyActivateChildGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MyActivateChildGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
