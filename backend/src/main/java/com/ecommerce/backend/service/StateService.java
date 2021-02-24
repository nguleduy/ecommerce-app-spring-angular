package com.ecommerce.backend.service;

import com.ecommerce.backend.model.State;
import com.ecommerce.backend.repository.StateRepository;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
@NoArgsConstructor
public class StateService {

  @Autowired
  private StateRepository stateRepository;

  public List<State> getStatesByCountryCode(String code) {
    return stateRepository.findByCountryCode(code);
  }

}
