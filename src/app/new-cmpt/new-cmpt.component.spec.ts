import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewCmptComponent } from './new-cmpt.component';

describe('NewCmptComponent', () => {
  let component: NewCmptComponent;
  let fixture: ComponentFixture<NewCmptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewCmptComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewCmptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
