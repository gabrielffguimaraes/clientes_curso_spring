package com.github.gabrielffguimaraes.service;

import com.github.gabrielffguimaraes.model.entity.Cliente;
import com.github.gabrielffguimaraes.model.entity.Servico;
import com.github.gabrielffguimaraes.model.repository.ClienteRepository;
import com.github.gabrielffguimaraes.model.repository.ServicoRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;

@Service
public class ClienteService {
    @Autowired
    private ClienteRepository clienteRepository;
    @Autowired
    private ServicoRepository servicoRepo;
    public Cliente save(Cliente cliente) {
        cliente.setId(null);
        Optional<Cliente> c = clienteRepository.findByCpf(cliente.getCpf());
        if(c.isPresent()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST,"Cliente já adicionado para este CPF.");
        }
        return clienteRepository.save(cliente);
    }

    public void atualizar(Integer id, Cliente clienteAtualizado) {
        Optional<Cliente> c = clienteRepository.verificarCpf(id,clienteAtualizado.getCpf());
        if(c.isPresent()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST,"Cliente já adicionado para este CPF.");
        }
        clienteRepository
                .findById(id)
                .map(cliente -> {
                    clienteAtualizado.setId(cliente.getId());
                    return clienteRepository.save(clienteAtualizado);
                }).orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND,"Cliente nao encontrado"));
    }

    public void deletar(Integer id) {
        clienteRepository.findById(id)
                .map( cliente -> {
                    Optional<Servico> servico = servicoRepo.findByCliente(cliente);
                    if(servico.isPresent()) {
                        throw new ResponseStatusException(HttpStatus.BAD_REQUEST,"Cliente não pode ser deletado pois , há serviço(s) pendentes .");
                    }
                    clienteRepository.delete(cliente);
                    return Void.TYPE;
                })
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND,"Cliente nao encontrado"));
    }
}
