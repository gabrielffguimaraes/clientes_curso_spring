package com.github.gabrielffguimaraes.util.customExceptions;

public class UsuarioCustomExceptions extends RuntimeException{
    public UsuarioCustomExceptions(String username){
        super("Usuário já cadastrado para o login "+username);
    }
}
