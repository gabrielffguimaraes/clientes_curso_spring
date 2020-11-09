package com.github.gabrielffguimaraes.model.entity;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import javax.validation.constraints.NotEmpty;

@NoArgsConstructor
@AllArgsConstructor
@Builder
@Data
@Entity
public class Usuario {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    @Column(unique = true,name = "login")
    @NotEmpty(message = "{campo.username.obrigatorio}")
    private String username;
    @Column(name = "senha")
    @NotEmpty(message = "{campo.password.obrigatorio}")
    private String password;
}
