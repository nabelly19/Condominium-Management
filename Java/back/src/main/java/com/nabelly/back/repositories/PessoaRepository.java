package com.nabelly.back.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.nabelly.back.model.PessoaModel;
import java.util.List;

public interface PessoaRepository extends MongoRepository<PessoaModel, String> {
    @Query("{'name': ?0}")
    List<PessoaModel> findByName(String name);

    @Query("{'email': ?0}")
    PessoaModel findByEmail(String email);

    @Query("{'name': ?1, 'cpf': ?0}")
    List<PessoaModel> findByCpfAndName(String Cpf, String name);
}
