import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductsComponent} from './component/products/products.component';
import {CategoryComponent} from './component/category/category.component';

// http://localhost:4200
const routes: Routes = [
  // http://localhost:4200/category/id
  {path: 'category/:id', component: ProductsComponent},
  // http://localhost:4200/search/keyword
  {path: 'search/:keyword', component: ProductsComponent},
  // http://localhost:4200/products
  {path: 'products', component: ProductsComponent},
  {path: '', component: ProductsComponent},
  {path: '**', component: CategoryComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
