package com.nabelly.back.model;

import java.util.Date;

import java.util.List;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Document("usuario")
public class UsuarioModel extends PessoaModel {
   @Getter
   @Setter
   private String login;
   @Getter
   @Setter
   private String senha;

   public UsuarioModel(String id, String nome, String cpf,
   Date data_nasc, String email, ApartamentoModel apartamento,
   String login, String senha)
   {
        super(id, nome, cpf, data_nasc, email, apartamento);
        this.login = login;
        this.senha = senha;
   }

}
