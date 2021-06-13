package com.github.gabrielffguimaraes.rest;

import com.github.gabrielffguimaraes.model.entity.Cliente;
import com.github.gabrielffguimaraes.model.entity.Servico;
import com.github.gabrielffguimaraes.model.repository.ClienteRepository;
import com.github.gabrielffguimaraes.model.repository.ServicoRepository;
import com.github.gabrielffguimaraes.rest.dto.ServicoDTO;
import com.github.gabrielffguimaraes.util.BigDecimalConverter;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.repository.query.Param;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.server.ResponseStatusException;

import javax.validation.Valid;
import java.math.BigDecimal;
import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;

@RestController
@RequestMapping("/api/servicos")
/*@CrossOrigin("*")*/
public class ServicoController {
    @Autowired
    private ClienteRepository clienteRepository;
    @Autowired
    private ServicoRepository servicoRepository;
    @Autowired
    private BigDecimalConverter bigDecimalConverter;

    @PostMapping
    @ResponseStatus(HttpStatus.CREATED)
    public Servico adicionarServico(@RequestBody @Valid ServicoDTO servicoDTO){
        Servico servico = new Servico();
        servico.setDescricao(servicoDTO.getDescricao());
        //servico.setDataCadastro(LocalDate.parse(servicoDTO.getData(), DateTimeFormatter.ofPattern("dd/MM/yyyy")));
        Cliente cliente = this.clienteRepository
                .findById(servicoDTO.getIdCliente())
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND,"Cliente não encontrado ."));
        servico.setCliente(cliente);
        System.out.println(servicoDTO.getValor());
        servico.setValor(bigDecimalConverter.converter(servicoDTO.getValor()));
        return servicoRepository.save(servico);
    }
    @GetMapping("{id}")
    public Servico obterPorId(@PathVariable("id") Integer id){
        return servicoRepository
                .findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND,"Serviço não encontrado ."));
    }

    @GetMapping
    public List<Servico> obterTodos(){
        return servicoRepository.findAll();
    }

    @GetMapping("/pesquisar")
    public List<Servico> pesquisar (
        @RequestParam(value = "nome",required = false,defaultValue = "") String nome,
        @RequestParam(value = "mes",required = false,defaultValue = "") String mes
    ){
       return this.servicoRepository.pesquisar("%"+nome+"%",mes);
    }

    @PutMapping("{id}")
    public Servico alterarServico(@PathVariable("id") Integer id,@RequestBody @Valid ServicoDTO servicoDTO){
        BigDecimalConverter bigDecimalConverter = new BigDecimalConverter();
        Cliente cliente = clienteRepository.findById(servicoDTO.getIdCliente())
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND,"Cliente deste Serviço não encontrado"));
        servicoRepository.findById(id)
                .orElseThrow(() -> new ResponseStatusException(HttpStatus.NOT_FOUND,"Servico não encontrado"));
        Servico servico = new Servico();
        servico.setId(id);
        servico.setCliente(cliente);
        servico.setDescricao(servicoDTO.getDescricao());
        servico.setValor(bigDecimalConverter.converter(servicoDTO.getValor()));
        return servicoRepository.save(servico);
    }
    @DeleteMapping("{id}")
    public void deletarServico(@PathVariable("id") Integer id) {
        servicoRepository.findById(id)
                .map( servico -> {
                    servicoRepository.delete(servico);
                    return Void.TYPE;
                })
                .orElseThrow(() -> {
                   return new ResponseStatusException(HttpStatus.NOT_FOUND,"Serviço não encontrado .");
                });
    }
}
