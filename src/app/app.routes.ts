import { Routes } from '@angular/router';
import { MyFirstComponent } from './my-first/my-first.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { NewProductComponent } from './new-product/new-product.component';

export const routes: Routes = [
    {path: '', component: MyFirstComponent},
    {path: 'about', loadComponent: () => import('./about/about.component').then(c => c.AboutComponent)},
    {path: 'products', loadComponent: () => import('./products/products.component').then(c => c.ProductsComponent)},
    {path: 'newProduct', loadComponent: () => import('./new-product/new-product.component').then(c => c.NewProductComponent)},
];
