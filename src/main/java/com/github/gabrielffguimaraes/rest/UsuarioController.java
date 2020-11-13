package com.github.gabrielffguimaraes.rest;

import com.github.gabrielffguimaraes.model.entity.Usuario;
import com.github.gabrielffguimaraes.model.repository.UsuarioRepository;
import com.github.gabrielffguimaraes.service.UsuarioService;
import com.github.gabrielffguimaraes.util.customExceptions.UsuarioCustomExceptions;
import lombok.RequiredArgsConstructor;
import net.bytebuddy.implementation.bytecode.Throw;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.validation.Valid;
import java.util.Arrays;
import java.util.List;

@RestController
@RequestMapping("/api/usuarios")
@RequiredArgsConstructor
@CrossOrigin("*")
public class UsuarioController {
    public List<Usuario> usuarios;
    @Autowired
    private final UsuarioRepository usuarioRepository;
    @Autowired
    private final UsuarioService usuarioService;
    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Usuario salvar(@RequestBody @Valid Usuario usuario){
        try {
            return usuarioService.salvar(usuario);
        }catch(UsuarioCustomExceptions e){
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST,e.getMessage());
        }
    }
}
