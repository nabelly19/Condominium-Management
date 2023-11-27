package com.nabelly.back.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.nabelly.back.model.UsuarioModel;
import java.util.List;

public interface UsuarioRepository extends MongoRepository<UsuarioModel, String>{

    @Query("{'login': ?0}")
    List<UsuarioModel> findByLogin(String login);

}
