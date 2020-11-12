package com.github.gabrielffguimaraes.config;

import org.springframework.context.annotation.Bean;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.crypto.password.NoOpPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.inMemoryAuthentication().
                withUser("fulano").
                password("@321").
                roles("USER");
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.
                csrf(). // DESABILITANDO A PROTEÇÃO CSRF POIS VOU USAR O AUTH
                disable().
                cors(). // HABILITANDO O CORS
                and(). //VOLTANDO PARA O HTTP
                sessionManagement().
                sessionCreationPolicy(SessionCreationPolicy.STATELESS); //DESABILITANDO ASESSAO POIS NAO
        // VOU FAZER USO
    }

    @Bean
    public AuthenticationManager authenticationManager() throws Exception{
        return super.authenticationManager();
    }

    @Bean
    public PasswordEncoder passwordEncoder(){
        return NoOpPasswordEncoder.getInstance();
    }
}
