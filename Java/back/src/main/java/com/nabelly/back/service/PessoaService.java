package com.nabelly.back.service;

import java.util.List;
import java.util.Date;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nabelly.back.model.PessoaModel;
import com.nabelly.back.model.ApartamentoModel;
import com.nabelly.back.repositories.PessoaRepository;

@Service
public class PessoaService {
    @Autowired
    private PessoaRepository PessoaRepository;

    public PessoaModel save(PessoaModel apartamentoModel) {
        return this.PessoaRepository.save(apartamentoModel);
    }

    public void save(String id, String nome, String cpf, Date data_nasc, String email, ApartamentoModel apartamento) {
        this.PessoaRepository.save(new PessoaModel(id, nome, cpf, data_nasc, email, apartamento ));
    }

    public List<PessoaModel> findAll() {
        return (List<PessoaModel>) this.PessoaRepository.findAll();
    }

    public List<PessoaModel> findByName(String nome) {
        return (List<PessoaModel>) this.PessoaRepository.findByName(nome);
    }

    public List<PessoaModel> findByCpfAndName(String cpf, String name) {
        return (List<PessoaModel>) this.PessoaRepository.findByCpfAndName(cpf, name);
    }

}
