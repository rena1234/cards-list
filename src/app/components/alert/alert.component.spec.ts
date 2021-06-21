import { ComponentFixture, TestBed } from '@angular/core/testing';
import {MatDialogModule, MatDialogRef} from '@angular/material/dialog';

import { AlertComponent } from './alert.component';

describe('AlertComponent', () => {
  let component: AlertComponent;
  let fixture: ComponentFixture<AlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AlertComponent ],
      imports: [ MatDialogModule ],
      providers: [
        {
          provide: MatDialogRef,
          useValue: {}
        },
      ],
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
