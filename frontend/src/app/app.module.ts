import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ProductsComponent} from './component/products/products.component';
import {HttpClientModule} from '@angular/common/http';
import {CategoryComponent} from './component/category/category.component';
import {SearchComponent} from './component/search/search.component';
import {ProductDetailsComponent} from './component/product-details/product-details.component';
import {NgbPaginationModule} from '@ng-bootstrap/ng-bootstrap';
import { CartStatusComponent } from './component/cart-status/cart-status.component';
import { CartDetailsComponent } from './component/cart-details/cart-details.component';
import { CheckoutComponent } from './component/checkout/checkout.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CategoryComponent,
    SearchComponent,
    ProductDetailsComponent,
    CartStatusComponent,
    CartDetailsComponent,
    CheckoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgbPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
