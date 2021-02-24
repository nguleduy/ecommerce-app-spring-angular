package com.ecommerce.backend.repository;

import com.ecommerce.backend.model.State;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface StateRepository extends JpaRepository<State, Long> {

  List<State> findByCountryCode(String code);
}
