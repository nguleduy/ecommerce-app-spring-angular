package com.ecommerce.backend.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.Set;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "country")
public class Country extends BaseEntity {

  @Column(name = "code")
  private String code;

  @Column(name = "name")
  private String name;

  @JsonIgnore
  @OneToMany(mappedBy = "country", fetch = FetchType.LAZY)
  private Set<State> states;
}
