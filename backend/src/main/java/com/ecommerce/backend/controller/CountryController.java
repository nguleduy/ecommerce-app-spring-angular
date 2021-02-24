package com.ecommerce.backend.controller;

import com.ecommerce.backend.model.Country;
import com.ecommerce.backend.service.CountryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("api/")
@CrossOrigin("http://localhost:4200")
public class CountryController {

  @Autowired
  private CountryService countryService;

  @GetMapping("countries")
  public List<Country> getCountries() {
    return countryService.getCountries();
  }
}
