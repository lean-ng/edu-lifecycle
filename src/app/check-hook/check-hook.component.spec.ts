import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckHookComponent } from './check-hook.component';

describe('CheckHookComponent', () => {
  let component: CheckHookComponent;
  let fixture: ComponentFixture<CheckHookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckHookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckHookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
