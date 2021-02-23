import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {DateService} from '../../service/date.service';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {

  checkoutGroup: FormGroup;
  creditCardMonths = [];
  creditCardYears = [];
  totalQuantity = 0;
  totalPrice = 0;

  constructor(private formBuilder: FormBuilder,
              private dateService: DateService) {
  }

  ngOnInit(): void {
    this.initForm();
    this.getMonths();
    this.getYears();
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

  getMonths(): void {
    const startMonth = new Date().getMonth() + 1;
    this.dateService.getMonths(startMonth).subscribe(
      data => {
        this.creditCardMonths = data;
      }
    );
  }

  getYears(): void {
    this.dateService.getYears().subscribe(
      data => {
        this.creditCardYears = data;
      }
    );
  }
}
