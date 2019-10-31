import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

export interface Product {
  id: number;
  name: string;
  price: number;
  amount: number;
}
@Injectable({
  providedIn: 'root'
})
export class CartService {
  data: Product[] = [
    { id: 0, name: 'Chapo Madondo', price: 50, amount: 1 },
    { id: 1, name: 'Githeri', price: 30, amount: 1 },
    { id: 2, name: 'Ugali Mboga', price: 50, amount: 1 },
    { id: 3, name: 'Salad', price: 30, amount: 1 },
    { id: 4, name: 'Samosa', price: 20, amount: 1 },
    { id: 5, name: 'Ugali Nyama', price: 100, amount: 1 },
    { id: 6, name: 'Mursik', price: 50, amount: 1 },
    { id: 7, name: 'Maziwa Fresh', price: 40, amount: 1 },
    { id: 8, name: 'Soda', price: 30, amount: 1 },
    { id: 9, name: 'Pancakes', price: 50, amount: 1 }
  ];

  private cart = [];
  private cartItemCount = new BehaviorSubject(0);

  constructor() {}

  getProducts() {
    return this.data;
  }

  getCart() {
    return this.cart;
  }

  getCartItemCount() {
    return this.cartItemCount;
  }

  addProduct(product) {
    let added = false;
    for (let p of this.cart) {
      if (p.id === product.id) {
        p.amount += 1;
        added = true;
        break;
      }
    }
    if (!added) {
      this.cart.push(product);
    }
    this.cartItemCount.next(this.cartItemCount.value + 1);
  }

  decreaseProduct(product) {
    for (let [index, p] of this.cart.entries()) {
      if (p.id === product.id) {
        p.amount -= 1;
        if (p.amount == 0) {
          this.cart.splice(index, 1);
        }
      }
    }
    this.cartItemCount.next(this.cartItemCount.value - 1);
  }

  removeProduct(product) {
    for (let [index, p] of this.cart.entries()) {
      if (p.id === product.id) {
        this.cartItemCount.next(this.cartItemCount.value - p.amount);
        this.cart.splice(index, 1);
      }
    }
  }
}
