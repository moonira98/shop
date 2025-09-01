import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { ProductsService } from '../services/api/products.service';
import { Product } from '../services/api/ model';

@Component({
  selector: 'app-product-page',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-page.component.html',
  styleUrl: './product-page.component.scss'
})
export class ProductPageComponent {

  private readonly route = inject(ActivatedRoute);
  getProductService = inject(ProductsService)

   productId: string | null = null;
   product!: Product;

  ngOnInit() {
    this.productId = this.route.snapshot.paramMap.get('id');

    this.getProductService.getProductById(this.productId).subscribe({
      next: (res: any) => this.product = res, 
      error: (res:any) => console.error('bad', res.error)
      
    })
  }

 
}
