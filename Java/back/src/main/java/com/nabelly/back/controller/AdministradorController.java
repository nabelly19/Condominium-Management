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


import com.nabelly.back.service.AdministradorService;
import com.nabelly.back.model.AdministradorModel;

import com.nabelly.back.service.ApartamentoService;
import com.nabelly.back.model.ApartamentoModel;




@RestController // Define que a classe é um controlador REST
@RequestMapping("/admin") // Mapeia solicitações web para métodos de tratamento de solicitações

public class AdministradorController {
    
    @Autowired
        private AdministradorService aService;

        private ApartamentoService aptoService;

        @GetMapping("")
        public List<ApartamentoModel> FindAptos()
        {

        }

        //fazer um get e set de apartamento para depois acionar um usuário

        @PostMapping("")
        public void newAdm(@RequestBody AdministradorModel newAdmin) {
            aService.save(newAdmin);
        }

}
