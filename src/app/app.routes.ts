import { Routes } from '@angular/router';
import { MyFirstComponent } from './my-first/my-first.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { NewProductComponent } from './new-product/new-product.component';

export const routes: Routes = [
    {path: 'home', component: MyFirstComponent},
    {path: 'about', component: AboutComponent},
    {path: 'products', component: ProductsComponent},
    {path: 'newProduct', component: NewProductComponent}
];
