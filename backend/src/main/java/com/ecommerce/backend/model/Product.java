package com.ecommerce.backend.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.math.BigDecimal;
import java.util.Date;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
public class Product extends BaseEntity {

  private String sky;
  private String name;
  private String description;
  private BigDecimal unitPrice;
  private String imageUrl;
  private Boolean active;
  private Integer unitsInStock;
  private Date dateCreated;
  private Date lastUpdated;
  private Category category;
}
