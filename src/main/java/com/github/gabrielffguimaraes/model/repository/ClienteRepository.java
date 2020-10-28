package com.github.gabrielffguimaraes.model.repository;

import com.github.gabrielffguimaraes.model.entity.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ClienteRepository extends JpaRepository<Cliente,Integer> {

}
