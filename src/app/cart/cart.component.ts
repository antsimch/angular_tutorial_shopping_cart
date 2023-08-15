import { Component } from '@angular/core';
import { CartService } from '../cart.service';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  items = this.cartSvc.getItems();

  form = this.fb.group({
    name: '',
    address: ''
  })

  constructor(
    private cartSvc: CartService,
    private fb: FormBuilder) {}
  
  onSubmit() {
    console.warn('Your order has been submitted', this.form.value);
    this.items = this.cartSvc.clearCart();
    this.form.reset();
  }
}
