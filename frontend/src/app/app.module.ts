import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {ProductsComponent} from './component/products/products.component';
import {HttpClientModule} from '@angular/common/http';
import { CategoryComponent } from './component/category/category.component';
import { SearchComponent } from './component/search/search.component';
import { ProductDetailsComponent } from './component/product-details/product-details.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    CategoryComponent,
    SearchComponent,
    ProductDetailsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
