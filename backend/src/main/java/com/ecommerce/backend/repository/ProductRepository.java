package com.ecommerce.backend.repository;

import com.ecommerce.backend.model.Product;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface ProductRepository extends JpaRepository<Product, Long> {

  List<Product> findByCategoryId(Long id, Pageable pageable);

  List<Product> findByNameContaining(String keyword, Pageable pageable);

  @Query("select COUNT (id) FROM Product WHERE category.id = ?1")
  Long getProductsSizeByCategoryId(Long id);

  @Query("SELECT COUNT (id) FROM Product WHERE name LIKE %?1%")
  Long getProductsSizeByKeyword(String keyword);
}
