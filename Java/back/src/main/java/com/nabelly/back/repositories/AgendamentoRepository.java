package com.nabelly.back.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.nabelly.back.model.AgendamentoModel;
import java.util.List;
import java.util.Date;

public interface AgendamentoRepository extends MongoRepository<AgendamentoModel, String> {
    @Query("{'idUsuario.id': ?0 }")
    List<AgendamentoModel> findByUserID(String usuarioId);

    @Query("{'data': ?0}")
    AgendamentoModel findByData(Date data);

    
    @Query("{'tipo': ?0}")
    AgendamentoModel findByTipo(String tipo);

}
