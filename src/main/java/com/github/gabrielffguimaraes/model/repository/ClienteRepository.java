package com.github.gabrielffguimaraes.model.repository;

import com.github.gabrielffguimaraes.model.entity.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface ClienteRepository extends JpaRepository<Cliente,Integer> {

    Optional<Cliente> findByCpf(String cpf);

    @Query("select c from Cliente c where c.cpf=:cpf and c.id!=:id")
    Optional<Cliente> verificarCpf(@Param("id") Integer id,@Param("cpf") String cpf);
}
