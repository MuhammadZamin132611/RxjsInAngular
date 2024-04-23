import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatchErrorThrowErrorComponent } from './catch-error-throw-error.component';

describe('CatchErrorThrowErrorComponent', () => {
  let component: CatchErrorThrowErrorComponent;
  let fixture: ComponentFixture<CatchErrorThrowErrorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CatchErrorThrowErrorComponent]
    });
    fixture = TestBed.createComponent(CatchErrorThrowErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
