package com.nabelly.back.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.nabelly.back.model.ApartamentoModel;
import com.nabelly.back.repositories.ApartamentoRepository;

@Service
public class ApartamentoService {

    @Autowired
    private ApartamentoRepository ApartamentoRepository;

    public ApartamentoModel save(ApartamentoModel apartamentoModel) {
        return this.ApartamentoRepository.save(apartamentoModel);
    }

    public void save(int bloco, int numero, int andar, int garagem) {
        this.ApartamentoRepository.save(new ApartamentoModel(bloco, numero, andar, garagem));
    }

    public List<ApartamentoModel> findAll() {
        return (List<ApartamentoModel>) this.ApartamentoRepository.findAll();
    }

    public List<ApartamentoModel> findByBloco(int bloco) {
        return (List<ApartamentoModel>) this.ApartamentoRepository.findByBloco(bloco);
    }

    public ApartamentoModel findByNumero(int numero) {
        return (ApartamentoModel) this.ApartamentoRepository.findByNumero(numero);
    }

    public List<ApartamentoModel> findByAndar(int andar) {
        return (List<ApartamentoModel>) this.ApartamentoRepository.findByAndar(andar);
    }
}
