import { ProductPageComponent } from './product-page/product-page.component';

import { Routes } from '@angular/router';
import { MyFirstComponent } from './my-first/my-first.component';


export const routes: Routes = [
    {path: '', component: MyFirstComponent},
    {path: 'about', loadComponent: () => import('./about/about.component').then(c => c.AboutComponent)},
    {path: 'products', loadComponent: () => import('./products/products.component').then(c => c.ProductsComponent)},
    {path: 'product-page', loadComponent: () => import('./product-page/product-page.component').then(c => c.ProductPageComponent)},
   
];
 