package com.ecommerce.backend.service;

import com.ecommerce.backend.model.Product;
import com.ecommerce.backend.repository.ProductRepository;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
@NoArgsConstructor
public class ProductService {

  @Autowired
  private ProductRepository productRepository;

  public List<Product> getProducts(int page, int size) {
    Pageable pageable = PageRequest.of(page, size);
    return productRepository.findAll(pageable).getContent();
  }

  public List<Product> getProductsByCategoryId(Long id, int page, int size) {
    Pageable pageable = PageRequest.of(page, size);
    return productRepository.findByCategoryId(id, pageable);
  }

  public List<Product> getProductsByKeyword(String keyword, int page, int size) {
    Pageable pageable = PageRequest.of(page, size);
    return productRepository.findByNameContaining(keyword, pageable);
  }

  public Product getProductById(Long id) {
    return productRepository.findById(id).get();
  }

  public Long countProducts() {
    return productRepository.count();
  }

  public Long countProductsByCategoryId(Long id) {
    return productRepository.getProductsSizeByCategoryId(id);
  }

  public Long countProductsKeyword(String keyword) {
    return productRepository.getProductsSizeByKeyword(keyword);
  }
}
