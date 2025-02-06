import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';

export interface Cart {
  id: number,
  idProduct: number,
  idUser: number,
  quantity: number,
  price: number,
}

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
  imports: [CommonModule],
})
export class CartComponent implements OnInit {
  cartItems: Cart[] = [];
  total: number = 0;

  constructor(
    private cartService: CartService,
  ) { }

  ngOnInit(): void {
    this.calculateTotal();

    this.cartService.getAllCarts().subscribe({
      next: (data) => {
        this.cartItems = data;
        this.calculateTotal();
      },
      error: (err) => {
        console.error('Erreur lors de la récupération du panier:', err);
      }
    });
  }

  calculateTotal(): void {
    this.total = this.cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  }
}
