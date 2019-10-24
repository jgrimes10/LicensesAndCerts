import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWalletAddressModalComponent } from './add-wallet-address-modal.component';

describe('AddWalletAddressModalComponent', () => {
  let component: AddWalletAddressModalComponent;
  let fixture: ComponentFixture<AddWalletAddressModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddWalletAddressModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddWalletAddressModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
