import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductsComponent} from './component/products/products.component';
import {ProductDetailsComponent} from './component/product-details/product-details.component';
import {CartDetailsComponent} from './component/cart-details/cart-details.component';
import {CheckoutComponent} from './component/checkout/checkout.component';

// http://localhost:4200
const routes: Routes = [
  // http://localhost:4200/category/id
  {path: 'category/:id', component: ProductsComponent},
  // http://localhost:4200/search/keyword
  {path: 'search/:keyword', component: ProductsComponent},
  // http://localhost:4200/product/id
  {path: 'product/:id', component: ProductDetailsComponent},
  // http://localhost:4200/cart-details
  {path: 'cart-details', component: CartDetailsComponent},
  // http://localhost:4200/checkout
  {path: 'checkout', component: CheckoutComponent},
  // http://localhost:4200/products
  {path: 'products', component: ProductsComponent},
  {path: '', component: ProductsComponent},
  {path: '**', component: ProductsComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
