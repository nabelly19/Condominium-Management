package com.nabelly.back.model;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Document("administrador")
public class AdministradorModel extends PessoaModel {
    @Getter
    @Setter
    private String login;
    @Getter
    @Setter
    private String senha;
    @Getter
    @Setter
    private String chave;
 
    public AdministradorModel(String id, String nome, String cpf,
    Date data_nasc, String email, ApartamentoModel apartamento,
    String _login, String _senha, String _chave)
    {
         super(id, nome, cpf, data_nasc, email, apartamento);
         this.login = _login;
         this.senha = _senha;
         this.chave = _chave;
    }
}
