package com.ecommerce.backend.service;

import com.ecommerce.backend.repository.StateRepository;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@AllArgsConstructor
@NoArgsConstructor
public class StateService {

  @Autowired
  private StateRepository stateRepository;

}
