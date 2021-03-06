package com.ecommerce.backend.service;

import com.ecommerce.backend.model.Country;
import com.ecommerce.backend.repository.CountryRepository;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
@NoArgsConstructor
public class CountryService {

  @Autowired
  private CountryRepository countryRepository;

  public List<Country> getCountries() {
    return countryRepository.findAll();
  }

}
