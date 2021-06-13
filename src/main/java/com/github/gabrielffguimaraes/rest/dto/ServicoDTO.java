package com.github.gabrielffguimaraes.rest.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;

@Data
@NoArgsConstructor
public class ServicoDTO {
    @NotEmpty(message = "{campo.descricao.obrigatorio}")
    private String descricao;
    @NotEmpty(message = "{campo.preco.obrigatorio}")
    private String valor;
    @NotEmpty(message = "{campo.data.obrigatorio}")
    private String data;
    @NotNull(message = "{campo.cliente.obrigatorio}")
    private Integer idCliente;
}
