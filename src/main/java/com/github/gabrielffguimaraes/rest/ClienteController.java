package com.github.gabrielffguimaraes.rest;
import com.github.gabrielffguimaraes.model.entity.Cliente;
import com.github.gabrielffguimaraes.model.repository.ClienteRepository;
import com.github.gabrielffguimaraes.service.ClienteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.repository.Query;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/clientes")
/*@CrossOrigin("*")*/
public class ClienteController {

    private final ClienteRepository repository;
    @Autowired
    private ClienteService clienteService;

    @Autowired
    public ClienteController(ClienteRepository repository){
        this.repository=repository;
    }

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Cliente save(@RequestBody @Valid Cliente cliente){
        return clienteService.save(cliente);
    }
    @GetMapping
    public List<Cliente> obterTodos(){
        return repository.findAll();
    }
    @GetMapping("{id}")
    public Cliente acharPorId(@PathVariable Integer id){
        return repository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND,"Cliente nao encontrado"));
    }

    @DeleteMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deletar(@PathVariable Integer id){
        clienteService.deletar(id);
    }
    @PutMapping("{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void atualizar(@PathVariable Integer id,@RequestBody @Valid Cliente clienteAtualizado){
        this.clienteService.atualizar(id,clienteAtualizado);
    }
}
