import { ProductsService } from './../services/api/products.service';
import { Component, inject, OnInit } from '@angular/core';
import { Product } from '../services/api/ model';
import { ProductDetailsComponent } from "../product-details/product-details.component";
import { NgFor } from '@angular/common';


@Component({
  selector: 'app-products',
  standalone: true,
  imports: [ProductDetailsComponent, NgFor],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent implements OnInit {
  productsService = inject(ProductsService)
  products: Product[] = []

  ngOnInit(): void {
    this.getAllProducts()
    
  }

  getAllProducts() {
    this.productsService.getAllProducts().subscribe((res: Product[]) => {
     this.products = res
   
    })
  }
}
