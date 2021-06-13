package com.github.gabrielffguimaraes.model.repository;

import com.github.gabrielffguimaraes.model.entity.Cliente;
import com.github.gabrielffguimaraes.model.entity.Servico;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface ServicoRepository extends JpaRepository<Servico,Integer> {
    @Query("select s FROM Servico s " +
            " JOIN s.cliente c " +
            " WHERE upper( c.nome ) like upper( :nome ) and (:mes = '' or month(s.dataCadastro) = :mes)")
    List<Servico> pesquisar (@Param("nome") String nome,@Param("mes") String mes);

    Optional<Servico> findByCliente(Cliente cliente);
}
