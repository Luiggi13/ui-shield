import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShieldHeadingComponent } from './shield-heading.component';

describe('ShieldHeadingComponent', () => {
  let component: ShieldHeadingComponent;
  let fixture: ComponentFixture<ShieldHeadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShieldHeadingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShieldHeadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
