import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangesHookComponent } from './changes-hook.component';

describe('ChangesHookComponent', () => {
  let component: ChangesHookComponent;
  let fixture: ComponentFixture<ChangesHookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChangesHookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangesHookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
