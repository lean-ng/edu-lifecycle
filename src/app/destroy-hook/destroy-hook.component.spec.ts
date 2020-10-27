import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DestroyHookComponent } from './destroy-hook.component';

describe('DestroyHookComponent', () => {
  let component: DestroyHookComponent;
  let fixture: ComponentFixture<DestroyHookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DestroyHookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DestroyHookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
