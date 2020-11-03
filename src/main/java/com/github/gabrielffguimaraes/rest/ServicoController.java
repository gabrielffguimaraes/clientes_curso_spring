package com.github.gabrielffguimaraes.rest;

import com.github.gabrielffguimaraes.model.entity.Cliente;
import com.github.gabrielffguimaraes.model.entity.Servico;
import com.github.gabrielffguimaraes.model.repository.ClienteRepository;
import com.github.gabrielffguimaraes.model.repository.ServicoRepository;
import com.github.gabrielffguimaraes.rest.dto.ServicoDTO;
import com.github.gabrielffguimaraes.util.BigDecimalConverter;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

@RestController
@RequestMapping("/api/servicos")
public class ServicoController {
    @Autowired
    private ClienteRepository clienteRepository;
    @Autowired
    private ServicoRepository servicoRepository;
    @Autowired
    private BigDecimalConverter bigDecimalConverter;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Servico adicionarServico(@RequestBody ServicoDTO servicoDTO){
        Servico servico = new Servico();
        servico.setDescricao(servicoDTO.getDescricao());
        //servico.setDataCadastro(LocalDate.parse(servicoDTO.getData(), DateTimeFormatter.ofPattern("dd/MM/yyyy")));
        Cliente cliente = this.clienteRepository
                .findById(servicoDTO.getIdCliente())
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND,"Cliente não encontrado ."));
        servico.setCliente(cliente);
        System.out.println(servicoDTO.getPreco());
        servico.setValor(bigDecimalConverter.converter(servicoDTO.getPreco()));
        return servicoRepository.save(servico);
    }
}
