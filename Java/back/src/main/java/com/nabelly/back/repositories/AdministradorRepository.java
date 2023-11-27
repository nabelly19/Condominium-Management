package com.nabelly.back.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.nabelly.back.model.AdministradorModel;
import java.util.List;

public interface AdministradorRepository extends MongoRepository<AdministradorModel, String>{

    @Query("{'login': ?0}")
    List<AdministradorModel> findByLogin(String login);

    @Query("{'chave': ?0}")
    List<AdministradorModel> findByKey(String chave);

}
