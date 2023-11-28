package com.nabelly.back.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nabelly.back.model.AdministradorModel;
import com.nabelly.back.model.ApartamentoModel;
import com.nabelly.back.repositories.AdministradorRepository;
import com.nabelly.back.repositories.ApartamentoRepository;

@Service
public class AdministradorService {
    @Autowired
    private AdministradorRepository AdministradorRepository;

    public AdministradorModel save(AdministradorModel AdministradorModel) {
        return this.AdministradorRepository.save(AdministradorModel);
    }

    // public void save(int bloco, int numero, int andar, int garagem) {
    //     this.AdministradorRepository.save(new AdministradorModel(bloco, numero, andar, garagem));
    // }

    public List<AdministradorModel> findAll() {
        return (List<AdministradorModel>) this.AdministradorRepository.findAll();
    }

    public List<AdministradorModel> findByBloco(String Login) {
        return (List<AdministradorModel>) this.AdministradorRepository.findByLogin(Login);
    }

    public AdministradorModel findByNumero(String Chave) {
        return (AdministradorModel) this.AdministradorRepository.findByKey(Chave);
    }

}
