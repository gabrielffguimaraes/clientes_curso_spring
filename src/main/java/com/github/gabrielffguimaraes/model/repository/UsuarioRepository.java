package com.github.gabrielffguimaraes.model.repository;

import com.github.gabrielffguimaraes.model.entity.Usuario;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UsuarioRepository extends JpaRepository<Usuario,Integer> {
}
