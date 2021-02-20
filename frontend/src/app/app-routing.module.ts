import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductsComponent} from './component/products/products.component';
import {CategoryComponent} from './component/category/category.component';

const routes: Routes = [
  {path: 'products', component: ProductsComponent},
  {path: '', component: ProductsComponent},
  {path: '**', component: CategoryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
