package com.ecommerce.backend.service;

import com.ecommerce.backend.model.Product;
import com.ecommerce.backend.repository.ProductRepository;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
@NoArgsConstructor
public class ProductService {

  @Autowired
  private ProductRepository productRepository;

  public List<Product> getProducts() {
    return productRepository.findAll();
  }

  public List<Product> getProductsByCategoryId(Long id) {
    return productRepository.findByCategoryId(id);
  }

  public List<Product> getProductsByKeyword(String keyword) {
    return productRepository.findByNameContaining(keyword);
  }

  public Product getProductById(Long id) {
    return productRepository.findById(id).get();
  }
}
