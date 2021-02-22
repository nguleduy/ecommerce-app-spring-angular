package com.ecommerce.backend.controller;

import com.ecommerce.backend.model.Product;
import com.ecommerce.backend.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/")
@CrossOrigin("http://localhost:4200")
public class ProductController {

  @Autowired
  private ProductService productService;

  @GetMapping("products")
  public List<Product> getProducts(@RequestParam int page, @RequestParam int size) {
    return productService.getProducts(page, size);
  }

  @GetMapping("products/by-category")
  public List<Product> getProductsByCategoryId(@RequestParam Long id, @RequestParam int page, @RequestParam int size) {
    return productService.getProductsByCategoryId(id, page, size);
  }

  @GetMapping("products/by-keyword")
  public List<Product> getProductsByKeyword(@RequestParam String keyword, @RequestParam int page, @RequestParam int size) {
    return productService.getProductsByKeyword(keyword, page, size);
  }

  @GetMapping("product")
  public Product getProductById(@RequestParam Long id) {
    return productService.getProductById(id);
  }

  @GetMapping("count-products")
  public Long countProducts() {
    return productService.countProducts();
  }

  @GetMapping("count-products-by-category")
  public Long countProductsByCategoryId(@RequestParam Long id) {
    return productService.countProductsByCategoryId(id);
  }

  @GetMapping("count-products-by-keyword")
  public Long countProductsByKeyword(@RequestParam String keyword) {
    return productService.countProductsKeyword(keyword);
  }
}
