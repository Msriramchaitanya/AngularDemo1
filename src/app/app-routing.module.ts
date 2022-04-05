import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddProductComponentComponent } from './products/add-product-component/add-product-component.component';

import { EditProductComponentComponent } from './products/edit-product-component/edit-product-component.component';
import { ProductComponentComponent } from './products/product-component/product-component.component';

const routes: Routes = [
     {path:'products', component:ProductComponentComponent},
    {path: 'add', component: AddProductComponentComponent },
    { path: 'products/:productId/edit', component: EditProductComponentComponent } 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
