package com.ecommerce.backend.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.FetchType;
import javax.persistence.OneToMany;
import java.util.Set;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Category extends BaseEntity {

  @Column(name = "category_name")
  private String categoryName;

  @OneToMany(mappedBy = "category", fetch = FetchType.LAZY)
  private Set<Product> products;
}
