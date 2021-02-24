package com.ecommerce.backend.controller;

import com.ecommerce.backend.model.State;
import com.ecommerce.backend.service.StateService;
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
public class StateController {

  @Autowired
  private StateService stateService;

  @GetMapping("states")
  public List<State> getStatesByCountryCode(@RequestParam String code) {
    return stateService.getStatesByCountryCode(code);
  }
}
