package com.nabelly.back.model;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Document("administrador")
public class AdministradorModel {
    @Id
    @Getter
    @Setter
    private String id;
    @Getter
    @Setter
    private String nome;
    @Getter
    @Setter
    private String cpf;
    @Getter
    @Setter
    private Date data_nasc;
    @Getter
    @Setter
    private String email;
    @Getter
    @Setter
    private String login;
    @Getter
    @Setter
    private String senha;
    @Getter
    @Setter
    private String chave;

    @DBRef
    private ApartamentoModel apartamento;
 
    public AdministradorModel(String id,String nome, String cpf,
    Date data_nasc, String email, String _login, String _senha, String _chave)
    {
         this.id = id;
         this.nome = nome;
         this.cpf = cpf;
         this.data_nasc = data_nasc;
         this.email = email;
         this.login = _login;
         this.senha = _senha;
         this.chave = _chave;
    }

    public AdministradorModel(){
    }

    public AdministradorModel(String _id){
        this.id = _id;
    }

}
