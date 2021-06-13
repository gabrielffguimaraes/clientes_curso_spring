package com.github.gabrielffguimaraes.service;

import com.github.gabrielffguimaraes.model.entity.Usuario;
import com.github.gabrielffguimaraes.model.repository.UsuarioRepository;
import com.github.gabrielffguimaraes.util.customExceptions.UsuarioCustomExceptions;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class UsuarioService implements UserDetailsService {

    @Autowired
    private UsuarioRepository usuarioRepository;

    public Usuario salvar(Usuario usuario){
        boolean usuarioJaCadastrado = this.usuarioRepository.verificarJaCadastrado(usuario.getUsername());
        if (usuarioJaCadastrado) {
            throw new UsuarioCustomExceptions(usuario.getUsername());
        } else {
            return this.usuarioRepository.save(usuario);
        }
    }

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Usuario usuario = this.usuarioRepository.findByUsername(username).
                orElseThrow(() -> new UsernameNotFoundException("Login não encontrado !"));
        return User.builder().
                username(usuario.getUsername()).
                password(usuario.getPassword()).
                roles("USER").
                build();
    }
}
