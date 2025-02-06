import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from '../../interfaces/product.interface';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  imports: [CommonModule, FormsModule],
  animations: [
    trigger('flyInOut', [
      state('in', style({ opacity: 1, transform: 'translateX(0)' })),
      transition(':enter', [
        style({ opacity: 0, transform: 'translateX(-100%)' }),
        animate('200ms ease-in')
      ]),
      transition(':leave', [
        animate('200ms ease-out', style({ opacity: 0, transform: 'translateX(100%)' }))
      ])
    ])
  ]
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  isAdmin: boolean = false;
  selectedQuantity: number = 0;
  
  constructor(
    private productService: ProductService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.productService.getProducts().subscribe({
      next: (data) => {
        this.products = data;
      },
      error: (err) => {
        console.error("Erreur lors de la récupération des produits", err);
      }
    });

    const payload = this.authService.getCurrentUserRole();
    this.isAdmin = payload?.role === 'admin';    
  }

  navigateToAdmin(): void {
    this.router.navigate(['/admin']);
  }

  navigateToCart(): void {
    this.router.navigate(['/cart']);
  }

  addToCart(product: Product): void {
    // Ici, vous pouvez ajouter le produit au panier en utilisant le produit et sa quantité sélectionnée
    console.log('Ajout au panier :', product, 'Quantité :', product.selectedQuantity);
    // Implémentez votre logique d'ajout au panier ici (par exemple via un CartService)
    
  }
}
