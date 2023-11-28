package com.nabelly.back.controller;

import java.util.List;
import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.nabelly.back.DTO.PessoaAdministradorDTO;

import com.nabelly.back.service.AdministradorService;
import com.nabelly.back.service.PessoaService;
import com.nabelly.back.service.ApartamentoService;

import com.nabelly.back.model.AdministradorModel;
import com.nabelly.back.model.PessoaModel;
import com.nabelly.back.model.ApartamentoModel;

@RestController // Define que a classe é um controlador REST
@RequestMapping("/admin") // Mapeia solicitações web para métodos de tratamento de solicitações

public class AgendamentoController {
    @Autowired // Injeta a dependência PessoaService na classe CompanyController
    private PessoaService pessoaService;

    @Autowired
    private AdministradorService administradorService;

    @Autowired
    private ApartamentoService apartamentoService;

     @PostMapping("") // Mapeia solicitações HTTP POST para o método específico
     public void newAdmin(@RequestBody PessoaAdministradorDTO newaAdministradorDTO)
     {
         AdministradorModel newAdministradorModel = new AdministradorModel(newaAdministradorDTO.)
         
         newAdministradorModel.setIdPessoa(new PessoaModel(PessoaRes.getId()));
         administradorService.save(newAdministradorModel);
    
    }

    
}
