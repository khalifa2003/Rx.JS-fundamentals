import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BindCallBackComponent } from './bind-call-back.component';

describe('BindCallBackComponent', () => {
  let component: BindCallBackComponent;
  let fixture: ComponentFixture<BindCallBackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BindCallBackComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BindCallBackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
