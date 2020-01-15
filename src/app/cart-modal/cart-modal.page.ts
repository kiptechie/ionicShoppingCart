import { Product, CartService } from './../services/cart.service';
import { Component, OnInit } from '@angular/core';
import { ModalController, AlertController } from '@ionic/angular';

@Component({
  selector: 'app-cart-modal',
  templateUrl: './cart-modal.page.html',
  styleUrls: ['./cart-modal.page.scss'],
})
export class CartModalPage implements OnInit {

  cart: Product[] = [];

  constructor(private cartService: CartService, private modalCtrl: ModalController, private alertCtrl: AlertController) { }

  ngOnInit() {
    this.cart = this.cartService.getCart();
  }

  decreaseCartItem(product) {
    this.cartService.decreaseProduct(product);
  }

  increaseCartItem(product) {
    this.cartService.addProduct(product);
  }

  removeCartItem(product) {
    this.cartService.removeProduct(product);
  }

  getTotal() {
    return this.cart.reduce((i, j) => i + j.price * j.amount, 0);
  }

  close() {
    this.modalCtrl.dismiss();
  }

  async checkout() {
    // Perfom M-pesa, Mastercard, PayPal checkout process

    const cartCount =  this.cart.length;
    console.log('cart item count: ' + cartCount);

    this.cartService.clearCart();


    const alert = await this.alertCtrl.create({
      mode: 'ios',
      header: 'Thanks for your Order!',
      message: 'We will deliver your chakula as soon as possible',
      buttons: ['SAWA']
    });
    alert.present().then(() => {
      this.modalCtrl.dismiss();
    });
  }
}
