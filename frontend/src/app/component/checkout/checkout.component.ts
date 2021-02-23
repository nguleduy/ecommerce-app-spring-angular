import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  checkoutGroup: FormGroup;
  totalQuantity = 0;
  totalPrice = 0;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.initForm();
  }

  initForm(): void {
    this.checkoutGroup = this.formBuilder.group({
      customer: this.formBuilder.group({
        firstName: [''],
        lastName: [''],
        email: ['']
      }),
      shippingAddress: this.formBuilder.group({
        country: [''],
        street: [''],
        city: [''],
        state: [''],
        zipCode: ['']
      }),
      billingAddress: this.formBuilder.group({
        country: [''],
        street: [''],
        city: [''],
        state: [''],
        zipCode: ['']
      }),
      creditCard: this.formBuilder.group({
        cardType: [''],
        nameCard: [''],
        cardNumber: [''],
        securityCode: [''],
        expirationMonth: [''],
        expirationYear: ['']
      }),
    });
  }

  onSubmit(): void {
    console.log(this.checkoutGroup.get('customer')?.value);
    console.log(this.checkoutGroup.get('shippingAddress')?.value);
    console.log(this.checkoutGroup.get('billingAddress')?.value);
    console.log(this.checkoutGroup.get('creditCard')?.value);
  }

  copyShippingToBilling(event: Event) {
    if ((<HTMLInputElement>event.target).checked) {
      this.checkoutGroup.controls.billingAddress.setValue(this.checkoutGroup.controls.shippingAddress.value);
    } else {
      this.checkoutGroup.controls.billingAddress.reset();
    }
  }
}
