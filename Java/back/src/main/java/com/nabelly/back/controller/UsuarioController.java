package com.nabelly.back.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


import com.nabelly.back.service.UsuarioService;
import com.nabelly.back.model.UsuarioModel;

@RestController // Define que a classe é um controlador REST
@RequestMapping("/usuario")
public class UsuarioController {
    
    
    // @Autowired
    //     private UsuarioService uService;

    //     @PostMapping("")
    //     public void newUser(@RequestBody UsuarioModel newUser) {
    //         uService.save(newUser);
    //     }

}
