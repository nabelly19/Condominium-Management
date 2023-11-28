package com.nabelly.back.model;

import java.util.Date;

import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.DBRef;
import org.springframework.data.mongodb.core.mapping.Document;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.Getter;
import lombok.Setter;

@Data
@Document("pessoa")
@AllArgsConstructor
public class PessoaModel {
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
    
    @DBRef
    private ApartamentoModel apartamento;
}
