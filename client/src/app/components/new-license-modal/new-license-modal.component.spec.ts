import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewLicenseModalComponent } from './new-license-modal.component';

describe('NewLicenseModalComponent', () => {
  let component: NewLicenseModalComponent;
  let fixture: ComponentFixture<NewLicenseModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewLicenseModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewLicenseModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
