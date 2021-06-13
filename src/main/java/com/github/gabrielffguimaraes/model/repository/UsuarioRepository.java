package com.github.gabrielffguimaraes.model.repository;

import com.github.gabrielffguimaraes.model.entity.Servico;
import com.github.gabrielffguimaraes.model.entity.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface UsuarioRepository extends JpaRepository<Usuario,Integer> {
    Optional<Usuario> findByUsername(String username);

    @Query("select count(*) > 0 FROM Usuario s " +
            " WHERE upper( s.username ) like upper( :nome )")
    boolean verificarJaCadastrado (@Param("nome") String nome);
}
