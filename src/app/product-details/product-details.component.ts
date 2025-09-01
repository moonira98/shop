import { Component, Input } from '@angular/core';
import { Product } from '../services/api/ model';
import { RouterLink } from "@angular/router";
import { ProductPageComponent } from '../product-page/product-page.component';



@Component({
  selector: 'app-product-details',
  standalone: true,
  imports: [RouterLink, ProductPageComponent],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss'
})
export class ProductDetailsComponent {
  @Input()
  product!: Product

   
  }

