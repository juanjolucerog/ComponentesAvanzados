import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRegisterAccionesComponent } from './modal-register-acciones.component';

describe('ModalRegisterAccionesComponent', () => {
  let component: ModalRegisterAccionesComponent;
  let fixture: ComponentFixture<ModalRegisterAccionesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalRegisterAccionesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalRegisterAccionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
