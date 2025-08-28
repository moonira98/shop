import { ProductsService } from './../services/api/products.service';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Validators } from '@angular/forms';
import { inject } from '@angular/core';


@Component({
  selector: 'app-new-product',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './new-product.component.html',
  styleUrl: './new-product.component.scss'
})
export class NewProductComponent {
  productForm!: FormGroup
  productService = inject(ProductsService)

   constructor(private fb: FormBuilder) {
     this.productForm = this.fb.group({
    title: ['', Validators.required],
    price: [0, Validators.required],
    description: ['', Validators.required],
    categoryId: [null, Validators.required],
    images: this.fb.control(
  [''],
  Validators.required
) 
})

   }


   onAdd() {
    this.productService.addProduct(this.productForm.value).subscribe((res: any) => {
      console.log(res)
    })
   }
}
