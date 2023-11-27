package com.nabelly.back.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.nabelly.back.model.ApartamentoModel;
import java.util.List;

public interface ApartamentoRepository extends MongoRepository<ApartamentoModel, String> {
    @Query("{'bloco': ?0}")
    List<ApartamentoModel> findByBloco(int bloco);

    @Query("{'numero': ?0}")
    ApartamentoModel findByNumero(int numero);

    
    @Query("{'andar': ?0}")
    ApartamentoModel findByAndar(int andar);
}

