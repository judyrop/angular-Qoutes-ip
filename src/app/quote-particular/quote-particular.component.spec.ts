import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteParticularComponent } from './quote-particular.component';

describe('QuoteParticularComponent', () => {
  let component: QuoteParticularComponent;
  let fixture: ComponentFixture<QuoteParticularComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ QuoteParticularComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteParticularComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
