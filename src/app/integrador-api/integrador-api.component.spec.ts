import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntegradorApiComponent } from './integrador-api.component';

describe('IntegradorApiComponent', () => {
  let component: IntegradorApiComponent;
  let fixture: ComponentFixture<IntegradorApiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IntegradorApiComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntegradorApiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
