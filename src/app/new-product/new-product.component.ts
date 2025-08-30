import { ProductsService } from './../services/api/products.service';
import { Component } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { inject } from '@angular/core';


@Component({
  selector: 'app-new-product',
  standalone: true,
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './new-product.component.html',
  styleUrl: './new-product.component.scss'
})
export class NewProductComponent {

  fb = inject(FormBuilder)
  productService = inject(ProductsService)

  productForm: FormGroup = this.fb.group({
    title: ['', Validators.required],
    price: [0, Validators.required],
    description: ['', Validators.required],
    categoryId: [0, Validators.required],
    images: this.fb.array([
      this.fb.control('', [
        Validators.required, 
        Validators.pattern(/^https?:\/\/.+$/)

      ])
    ]
) 
})

get images(): FormArray {
  return this.productForm.get('images') as FormArray
}

addImageField(): void {
  this.images.push(
    this.fb.control('', [
      Validators.required, 
      Validators.pattern(/^https?:\/\/.+$/)
    ])
  )
}

removeImageField(index: number): void {
  this.images.removeAt(index)
}

   
onAdd() {

  const formValue = this.productForm.value;

  const payload = {
    ...formValue,
    categoryId: Number(formValue.categoryId), 
    images: formValue.images.map((img: string) => img.trim()) 
  };


    this.productService.addProduct(payload).subscribe((res: any) => {
      console.log(res)
    })
   }
}
