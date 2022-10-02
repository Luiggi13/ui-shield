import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShieldParComponent } from './shield-par.component';

describe('ShieldParComponent', () => {
  let component: ShieldParComponent;
  let fixture: ComponentFixture<ShieldParComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShieldParComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShieldParComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
