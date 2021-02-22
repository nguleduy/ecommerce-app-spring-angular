import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../service/product.service';
import {Product} from '../../model/product';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

  product: Product;

  constructor(private productService: ProductService,
              private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      () => {
        let id = this.route.snapshot.paramMap.get("id");
        this.getProductById(+id);
      }
    );
  }

  getProductById(id: number) {
    this.productService.getProductById(id).subscribe(
      data => {
        this.product = data;
      }
    );
  }

}
