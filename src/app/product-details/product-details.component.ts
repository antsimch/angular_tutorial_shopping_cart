import { Component, OnInit } from '@angular/core';
import { Product, products } from '../products';
import { ActivatedRoute } from '@angular/router';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  
  product: Product | undefined;

  constructor(
      private route: ActivatedRoute,
      private cartSvc: CartService) {}

  ngOnInit(): void {
    const routeParams = this.route.snapshot.paramMap;

    const productIdFromRoute = 
        Number(routeParams.get('productId'));

    this.product = products.find(
      (product) => {
        return product.id === productIdFromRoute
      });
  }

  addToCart(product: Product) {
    this.cartSvc.addToCart(product);
    window.alert('Your product has been added to the cart');
  }
}
